const express = require('express');
// const dotenv = require('dotenv');
// const mongoose = require('mongoose');
// dotenv.config();

const app = express();

// const connect = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//     process.exit(1); // Exit process with failure
//   }
// };

//connect();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
