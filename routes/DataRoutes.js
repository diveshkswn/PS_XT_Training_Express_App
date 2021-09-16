const express = require('express');
const courseList = require('../data/CourseList');

const route = express.Router();

route.get('/courses', (req, res) => {
  res.status(200).json(courseList);
});

route.post('/newCourse', (req, res) => {
  console.log(req.body);
  courseList.push({ ...req.body, id: Math.floor(Math.random() * 1000) });
  res.status(200).json({ success: 'true', data: req.body });
});

route.get('/deleteCourse/:id', (req, res) => {
  const idToDelete = req.params.id;

  courseList.splice(courseList.findIndex((i) => i.id === Number(idToDelete)), 1);
  res.redirect('/');
});
module.exports = route;
