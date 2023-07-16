const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");

// Models
const User = require("./model/user.model");

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

// Connecting to MongoDB
mongoose
  .connect("mongodb+srv://CanTek:CanTek123@cantekcluster.uujud7m.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Passport configuration
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return done(null, false, { message: "Incorrect email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return done(null, false, { message: "Incorrect email or password" });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

// Register route
app.post("/api/register", async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    // Check if any required field is empty
    if (!username || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "Please fill in all the required fields" });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance and save it to the database
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    // Return success if the new user is added to the database successfully
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    // Catch and handle error if the new user wasn't added successfully to the database
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Error creating user" });
  }
});



// Login route
app.post("/api/login", passport.authenticate("local"), (req, res) => {
  // Authentication successful, handle the response
  res.status(200).json({ status: "ok", message: "Login successful" });
});

// Logout route
app.get("/api/logout", (req, res) => {
  req.logout();
  // Clear the session data
  req.session = null;
  res.json({ status: "ok", message: "Logout successful" });
});


// Check authentication status
app.get("/api/checkAuth", (req, res) => {
  if (req.isAuthenticated()) {
    return res.json({ status: "ok", message: "User is authenticated" });
  } else {
    return res.json({ status: "error", message: "User is not authenticated" });
  }
});

// Default route
app.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    res.send("Hello, user is authenticated!");
  } else {
    res.send("Hello, user is not authenticated!");
  }
});

// Start the server
app.listen(8000, () => {
  console.log("Server is running on port 8000.");
});
