const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// Connect to MongoDB
mongoose
  .connect('mongodb+srv://CanTek:CanTek123@cantekcluster.uujud7m.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// User model
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

// Passport configuration
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return done(null, false, { message: 'Incorrect email or password' });
        }
        if (user.password !== password) {
          return done(null, false, { message: 'Incorrect email or password' });
        }
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Register route
app.post('/api/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ status: 'error', message: 'Email already exists' });
    }
    const user = await User.create({ username, email, password });
    return res.json({ status: 'ok', message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    return res.json({ status: 'error', message: 'Registration failed' });
  }
});

// Login route
app.post('/api/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    try {
      if (err || !user) {
        return res.json({ status: 'error', message: 'Incorrect email or password' });
      }

      req.logIn(user, (err) => {
        if (err) {
          return res.json({ status: 'error', message: 'An error occurred during login' });
        }
        return res.json({ status: 'ok', message: 'Login successful' });
      });
    } catch (error) {
      return res.json({ status: 'error', message: 'An error occurred during login' });
    }
  })(req, res, next);
});

// Default route
app.get('/', (req, res) => {
  res.send('Hello, we are connected!');
});

// Start the server
app.listen(8000, () => {
  console.log('Server is running on port 8000.');
});
