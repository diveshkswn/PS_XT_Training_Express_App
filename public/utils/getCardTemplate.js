export default function getCardTemplate(title, price, likes, rating, imageUrl) {
  return `<div class="card shadow" style="width: 18rem;">
    <img src=${imageUrl} class="card-img-top" alt="...">
    <div class="card-body">
    ${Array(rating).fill(1).map(() => '<i class="star-icon fas fa-star"></i>').join('')}
        <h5 class="card-title">${title}</h5>
        <h6>₹.<span>${price}</span></h6>
        <a href="#" class="btn btn-primary"><i class="fas fa-heart"> </i><span>${likes}</span></a>
        <a href="#" class="btn btn-danger"><i class="fas fa-trash-alt"></i></a>
    </div>
  </div>`;
}
