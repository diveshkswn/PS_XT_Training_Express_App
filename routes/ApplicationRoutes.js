/* eslint-disable no-unused-expressions */
const express = require('express');
const path = require('path');

const route = express.Router();

function errorHandler(error, req, res, next) {
  if (error) {
    console.log(Error, error);
  }

  next();
}

// Error middleware
route.use(errorHandler);

route.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../', '/public', 'Courses.html'));
});

route.get('/new', (req, res) => {
  res.sendFile(path.join(__dirname, '../', '/public', 'NewCourses.html'));
});

module.exports = route;
