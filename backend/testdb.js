const mongoose = require('mongoose');

// Replace with your connection string
const connectionString = process.env.MONGODB_CONNECTION_STRING || 'your_connection_string_here';

console.log('Attempting to connect to MongoDB with: ', 
  connectionString.replace(/\/\/([^:]+):([^@]+)@/, '//***:***@')); // Logs without showing password

mongoose.connect(connectionString)
  .then(() => {
    console.log('MongoDB connection successful!');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
  });
