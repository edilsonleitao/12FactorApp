const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const dotenv = require('dotenv');

dotenv.config();

const server = express();

mongoose.connect(
  process.env.DATABASE_URL, 
  {useNewUrlParser: true, useUnifiedTopology: true}
);

server.use(express.json());
server.use(routes);

server.listen(process.env.PORT || process.env.SERVER_PORT);