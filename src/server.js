const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const dotenv = require('dotenv');
const winston = require('winston');
const {Loggly} = require('winston-loggly-bulk');

dotenv.config();

winston.add(new Loggly({
    token: process.env.LOGGLY_TOKEN,
    subdomain: process.env.LOGGLY_SUBDOMAIN,
    tags: ['Winston-NodeJS'],
    json: true
}));

const server = express();

mongoose.connect(
  process.env.DATABASE_URL, 
  {useNewUrlParser: true, useUnifiedTopology: true}
);

server.use(express.json());
server.use(routes);
const port = process.env.PORT || process.env.SERVER_PORT;
server.listen(port, () => {
  winston.log('info', `Server iniciado na porta: ${port}.`)
});