//javascript code for photo gallery

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const photoGallery = document.querySelector('#list-photoGallery');
const photoGalleryItem = document.querySelectorAll('#list-photoGallery .item');
var translateY = 0;
var count = 1;

next.addEventListener('click', function (event) {
  event.preventDefault()
  if (count < photoGalleryItem.length) {

    count++;
    translateY -= 700;
    photoGallery.style.transform = `translateY(${translateY}px)`;

  }
  else if (count == photoGalleryItem.length) {
    count = 1;
    translateY = 0;
    photoGallery.style.transform = `translateY(${translateY}px)`;
  }
})

prev.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 1) {

    return false
  }
  translateY += 700
  photoGallery.style.transform = `translateY(${translateY}px)`
  count--
})


