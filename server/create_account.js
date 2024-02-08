// Express.js
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('./models/User'); // Assuming you have a User model

const router = express.Router();

router.post('/api/createAccount', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();
  res.send('Account created');
});

module.exports = router;