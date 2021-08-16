let slideIndex = 1; //https://www.w3schools.com/w3css
showPics(slideIndex);

function plusPics(x) {
  showPics((slideIndex += x));
}

function currentPic(x) {
  showPics((slideIndex = x));
}

function showPics(y) {
  let i;
  let j = document.getElementsByClassName('slide');
  let dots = document.getElementsByClassName('dot');
  if (y > j.length) {
    slideIndex = 1;
  }
  if (y < 1) {
    slideIndex = j.length;
  }
  for (i = 0; i < j.length; i++) {
    j[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' slide-white', '');
  }
  j[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' slide-white';
}
