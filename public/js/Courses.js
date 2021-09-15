/* eslint-disable max-len */
/* eslint-disable import/extensions */
import getCardTemplate from '../utils/getCardTemplate.js';

async function loadData() {
  const res = await fetch('/api/courses');
  const data = await res.json();
  data.forEach((course) => {
    const newElement = document.createElement('div');
    newElement.innerHTML = getCardTemplate(course.title, course.price, course.likes, course.rating, course.imageUrl);

    // let newElement = document.createElement("div").innerHTML()
    document.querySelector('.main-container').appendChild(newElement);
  });
}

loadData();
