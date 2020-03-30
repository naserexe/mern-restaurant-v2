const express = require('express');
const path = require('path');

const morgan = require('morgan');

const dotenv = require('dotenv');

const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

// Route files
const test = require('./routes/test');
const ingredient = require('./routes/ingredient');
const dish = require('./routes/dish');
const balance = require('./routes/balance');


// Load env vars
dotenv.config({ path: './config/config.env' });

// Database Connection
connectDB();

const app = express();

app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const PORT = process.env.PORT || 5000;

// Mount routers
app.use('/api/v2/test', test);
app.use('/api/v2/ingredient', ingredient);
app.use('/api/v2/dish', dish);
app.use('/api/v2/balance', balance);

// Serve static asset in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

// Error handler
app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`);
});

// Handle Unhandled rejections
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  // Close server and exit process
  server.close(() => process.exit(1));
});
