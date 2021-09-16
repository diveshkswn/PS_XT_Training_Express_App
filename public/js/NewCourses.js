/* eslint-disable no-unused-expressions */

async function postData(newCourseObj) {
  try {
    const res = await fetch('/api/newCourse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(newCourseObj), // body data type must match "Content-Type" header
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.message);
    const alertElement = document.createElement('div');
    alertElement.classList.add('alert', 'alert-danger');
    alertElement.innerHTML = 'Something went wrong';

    document.querySelector('#my-form').appendChild(alertElement);
  }
}

async function postNewItem(event) {
  event.preventDefault();
  const title = document.querySelector('#courseTitle').value;
  const price = document.querySelector('#coursePrice').value;
  const likes = document.querySelector('#courseLikes').value;
  const rating = document.querySelector('#courseRating').value;
  const imageUrl = document.querySelector('#courseImage').value;
  const newCourseObj = {
    title, price, likes, rating, imageUrl,
  };
  const response = await postData(newCourseObj);
  console.log(response);

  // Reset Form afetr success
  if (response && response.success === 'true') {
    // Reset Form afetr success
    document.querySelector('#my-form').reset();

    const alertElement = document.createElement('div');
    alertElement.classList.add('alert', 'alert-primary');
    alertElement.innerHTML = 'Data Added Successfully';

    document.querySelector('#my-form').appendChild(alertElement);
  }
}

document.querySelector('#my-form').addEventListener('submit', postNewItem);
