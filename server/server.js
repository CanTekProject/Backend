const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const User = require("./model/user.model");
const Message = require("./model/message.model");

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

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

app.post("/api/register", async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    if (!username || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "Please fill in all the required fields" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Error creating user" });
  }
});

app.post("/api/login", passport.authenticate("local"), (req, res) => {
  res.status(200).json({ status: "ok", message: "Login successful" });
});

app.get("/api/logout", (req, res) => {
  req.logout();
  req.session = null;
  res.json({ status: "ok", message: "Logout successful" });
});

app.get("/api/checkAuth", (req, res) => {
  if (req.isAuthenticated()) {
    return res.json({ status: "ok", message: "User is authenticated" });
  } else {
    return res.json({ status: "error", message: "User is not authenticated" });
  }
});

app.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    res.send("Hello, user is authenticated!");
  } else {
    res.send("Hello, user is not authenticated!");
  }
});

app.post("/api/chat/message", async (req, res) => {
  try {
    const { roomID, message } = req.body;

    // Perform authentication here
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Save the message to the database
    const newMessage = new Message({
      roomID,
      message,
      userID: req.user._id,
    });
    await newMessage.save();

    res.status(200).json({ status: "ok", message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ message: "Error sending message" });
  }
});

app.get("/api/chat/messages", async (req, res) => {
  try {
    const { roomID } = req.query;

    // Perform authentication here
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Fetch messages from the database
    const messages = await Message.find({ roomID }).populate("userID");
    res.status(200).json({ status: "ok", messages });
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ message: "Error fetching messages" });
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
