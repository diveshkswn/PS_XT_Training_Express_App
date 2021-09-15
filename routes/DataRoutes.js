const express = require('express');
const courseList = require('../data/CourseList');

const route = express.Router();

route.get('/courses', (req, res) => {
  res.status(200).json(courseList);
});

module.exports = route;
