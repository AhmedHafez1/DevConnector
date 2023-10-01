require('dotenv').config();
const express = require('express');
const connectMongoDb = require('./config/connect-db');
const app = express();

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/posts', require('./routes/posts'));

const PORT = process.env.PORT || 5000;
const start = async () => {
  await connectMongoDb();
  app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));
};

start();
