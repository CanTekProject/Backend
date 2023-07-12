const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./model/user.model.js');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://rreali1991:rick123@rrsystems.9krxkco.mongodb.net/overflowUser?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Register route
app.post('/api/register', async (req, res) => {
  try {
    const user = await User.create({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: 'ok' });
  } catch (err) {
    res.json({ status: 'error', error: 'duplicate email' });
  }
});

// Login route
app.post('/api/login', async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (user) {
      return res.json({ status: 'ok', user: true });
    } else {
      return res.json({ status: 'error', user: false });
    }
  } catch (err) {
    console.error('Error during login:', err);
    res.json({ status: 'error', error: 'login failed' });
  }
});

// Default route
app.get('/', (req, res) => {
  res.send('Hello, we are connected!');
});

// Start the server
app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
