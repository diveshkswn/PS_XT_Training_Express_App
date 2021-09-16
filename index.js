/* eslint-disable max-len */
require('dotenv').config();
const express = require('express');
const colors = require('colors');

const app = express();

// Static content
app.use(express.static('public'));

// Parser

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Route Middleware
app.use('/', require('./routes/ApplicationRoutes'));
app.use('/api', require('./routes/DataRoutes'));

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server Started and running on PORT : ${String(process.env.SERVER_PORT).red.bold}`);
});

// module.exports = app;
