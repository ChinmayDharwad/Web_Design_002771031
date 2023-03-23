const express = require('express');
const bodyParser = require('body-parser');
const User = require("./model");
// const 

const app = express();
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/user/create', async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ message: 'Full name, email, and password are required' });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'Email already taken' });
  }

  if (password.length < 8 || !/\d/.test(password) || !/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
    return res.status(400).json({ message: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit' });
  }

  const user = new User({ fullName, email, password });
  console.log(user);
  await user.save();

  res.json({ message: 'User created successfully' });
});

app.put('/user/edit', async (req, res) => {
  const { email, fullName, password } = req.body;

  if (!fullName || !password) {
    return res.status(400).json({ message: 'Full name and password are required' });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  user.fullName = fullName;
  user.password = password;
  await user.save();

  res.json({ message: 'User updated successfully' });
});

app.delete('/user/delete', async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  await user.deleteOne();

  res.json({ message: 'User deleted successfully' });
});

app.get('/user/getAll', async (req, res) => {
  const users = await User.find({}, 'fullName email password');
  res.json(users);
});

app.listen(8000, () => {
  console.log('Server listening on port 8000');
});
