/* eslint-disable max-len */
/* eslint-disable import/extensions */
import getCardTemplate from '../utils/getCardTemplate.js';

async function loadData() {
  const res = await fetch('/api/courses');
  const data = await res.json();
  data.forEach((course) => {
    const newElement = document.createElement('div');
    newElement.innerHTML = getCardTemplate(course.id, course.title, course.price, course.likes, course.rating, course.imageUrl);

    // let newElement = document.createElement("div").innerHTML()
    document.querySelector('.main-container').appendChild(newElement);
  });
}

loadData();

// async function DisplayCourses() {
//   const allCourses = await FetchCourses();
//   // Displaying all courses
//   for (const course of allCourses) {
//     CourseCardItem(course);
//   }
// }

// function CourseCardItem(course) {
//   const courseItem = document.createElement('div');
//   courseItem.setAttribute('class', 'col-md-3');

//   const courseCard = document.createElement('div');
//   courseCard.setAttribute('class', 'card m-1 p-2');

//   const courseImage = document.createElement('img');
//   courseImage.setAttribute('src', course.imageUrl);
//   courseImage.setAttribute('alt', course.title);
//   courseImage.setAttribute('height', '150px');

//   courseImage.setAttribute('class', 'card-img-top');

//   courseCard.append(courseImage);

//   const courseCardBody = document.createElement('div');
//   courseCardBody.setAttribute('class', 'card-body');

//   const courseRating = document.createElement('div');

//   for (i = 0; i < course.rating; i++) {
//     courseRating.innerHTML
//       += '<span style="color: Dodgerblue;" > <i class="fas fa-star"></i></span>';
//   }

//   courseCardBody.appendChild(courseRating);

//   // title
//   const courseTitle = document.createElement('h5');
//   courseTitle.setAttribute('class', 'card-title');
//   courseTitle.innerHTML = course.title;
//   courseCardBody.append(courseTitle);
//   // price
//   const coursePrice = document.createElement('h5');
//   coursePrice.setAttribute('class', 'card-text');
//   coursePrice.innerHTML += `₹.${course.price}`;
//   courseCardBody.append(coursePrice);

//   // likes
//   const courseLikes = document.createElement('button');
//   courseLikes.setAttribute('class', 'btn btn-primary');
//   courseLikes.innerHTML = course.likes;

//   // let courseLikesIcon = document.createElement('i');
//   // courseLikesIcon.setAttribute('class', 'far fa-thumbs-up');
//   courseLikes.innerHTML += '<i class="far fa-thumbs-up"></i>';

//   // delete
//   const courseDelete = document.createElement('button');
//   courseDelete.setAttribute('class', 'btn btn-danger mx-1');
//   courseDelete.setAttribute('id', course.id);

//   courseDelete.innerHTML = '<i class="fa fa-trash"></i>';

//   courseCardBody.append(courseLikes);
//   courseCardBody.append(courseDelete);

//   courseCard.append(courseCardBody);
//   courseItem.append(courseCard);

//   document.querySelector('#courseslist').appendChild(courseItem);
// }
