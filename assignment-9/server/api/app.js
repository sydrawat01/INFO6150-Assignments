import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import routes from './routes/index.js';

const app = express();

// Database Connection
mongoose
  .connect('mongodb://localhost:27017/todoapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connection Established!');
  });

// Middleware: Convert request data into JSON
app.use(bodyParser.json());
// Middleware: Cross Origin Resource Sharing
app.use(cors());

routes(app);
export default app;
