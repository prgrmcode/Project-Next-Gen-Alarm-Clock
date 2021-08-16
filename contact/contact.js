// https://www.w3schools.com/js

function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  emailCheck = /(.+)@(.+){2,}\.(.+){2,}/;
  var remarks = document.getElementById('remark').value;

  errors = [];

  if (name == '') {
    errors.push('Name must be filled out');
    console.log(errors);
    return false;
  }

  if (email == '') {
    errors.push('Email must be filled');
    console.log(errors);
    return false;
  } else if (!emailCheck.test(email)) {
    errors.push('The email must be properly formatted: yourname@domain.com');
    console.log(errors.join('\n'));
    return false;
  }

  if (remarks == '') {
    errors.push('You must write a comment');
    console.log(errors.join('\n'));
    return false;
  }

  if (errors.length >= 0) {
    console.log(errors.join('\n'));
  }

  return true;
}

/*
function myFunction() {
  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById('numb').value;

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x) || x < 1 || x > 10) {
    text = 'Input not valid';
  } else {
    text = 'Input OK';
  }
  document.getElementById('demo').innerHTML = text;
}
*/
