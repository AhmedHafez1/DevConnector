require('dotenv').config();
const express = require('express');
const connectMongoDb = require('./config/connect-db');
const app = express();

const PORT = process.env.PORT || 5000;
const start = async () => {
  await connectMongoDb();
  app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));
};

start();
