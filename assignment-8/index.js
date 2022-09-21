// import packages
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Routes for the todo API
const todoRoutes = require('./routes/todo');

const app = express();

// MongoDB connection
mongoose
  .connect('mongodb://127.0.0.1:27017/todoapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connection Established!');
  });

// Middleware: Cross Origin Resource Sharing
app.use(cors());
// Middleware: Convert request data into JSON
app.use(bodyParser.json());

// Include the todoRoutes on /api route
app.use('/api', todoRoutes);

// Use port 8000
const port = 8000;
// Start express server at port:8000
app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
