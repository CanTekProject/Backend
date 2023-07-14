const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const { Secret } = require("./config/config.js");
const bcrypt = require("bcryptjs");

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
app.use(
  session({
    secret: Secret,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://CanTek:CanTek123@cantekcluster.uujud7m.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

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

        user.comparePassword(password, function (matchError, isMatch) {
          if (matchError) {
            return done(error);
          } else if (!isMatch) {
            return done(null, false, {
              message: "Incorrect email or password",
            });
          } else {
            return done(null, user);
          }
        });
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Register route
app.post("/api/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ status: "error", message: "Email already exists" });
    }

    // Password encryption
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function (saltError, salt) {
      if (saltError) {
        throw saltError;
      } else {
        bcrypt.hash(password, salt, function (hashError, password) {
          if (hashError) {
            throw hashError;
          } else {
            console.log(password);
            const user = User.create({
              username,
              email,
              password,
            });
          }
        });
      }
    });

    return res.json({ status: "ok", message: "User registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error);
    return res.json({ status: "error", message: "Registration failed" });
  }
});

// Login route
app.post("/api/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    try {
      if (err || !user) {
        return res
          .status(401)
          .json({ status: "error", message: "Incorrect email or password" });
      }

      req.login(user, (err) => {
        if (err) {
          return res.status(500).json({
            status: "error",
            message: "An error occurred during login",
          });
        }
        return res
          .status(200)
          .json({ status: "ok", message: "Login successful" });
      });
    } catch (error) {
      return res
        .status(500)
        .json({ status: "error", message: "An error occurred during login" });
    }
  })(req, res, next);
});

// Logout route
app.get("/api/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error during session destruction:", err);
      return res.json({ status: "error", message: "Logout failed" });
    }
    delete req.user; // Clear the user property
    return res.redirect("/");
  });
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