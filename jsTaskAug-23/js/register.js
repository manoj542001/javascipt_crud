const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const password = document.getElementById('password');
const cnfpassword = document.getElementById('cnfpassword');
const mobile = document.getElementById('mobile');
const Today = document.getElementById('today');
document.getElementById("male").checked = true;

form.addEventListener('submit', e => {
  e.preventDefault();

  checkInputs();
});
function upper() {
  email.value = email.value.toUpperCase()
}
function checkInputs() {
  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const cnfpasswordValue = cnfpassword.value.trim();
  const mobileValue = mobile.value.trim();
  //   function getDate()
  // {
  // var today = new Date();
  // var dd = today.getDate();
  // var mm = today.getMonth()+1; //January is 0!
  // var yyyy = today.getFullYear();
  // if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} today = yyyy+mm+dd;
  // }

  if (usernameValue === '') {
    setErrorFor(username, 'Username cannot be blank');
  } else {
    setSuccessFor(username);
  }
  let NamExp = /^[a-zA-Z -]+$/
  if (!NamExp.test(firstNameValue)) {
    setErrorFor(firstName, 'Firstname cannot be blank');
  } else {
    setSuccessFor(firstName);
  }

  if (lastNameValue === '') {
    setErrorFor(lastName, 'Firstname cannot be blank');
  } else {
    setSuccessFor(lastName);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
  } else {
    setSuccessFor(password);
  }
  if (cnfpasswordValue === "") {
    setErrorFor(cnfpassword, 'Password cannot be blank');
  } else if (cnfpasswordValue !== passwordValue) {
    setErrorFor(cnfpassword, 'Password incorrect');
  } else {
    setSuccessFor(cnfpassword);
  }


  const mobilePattern = /^[6-9]\d{9}$/;
  if (mobileValue === '') {
    setErrorFor(mobile, "Please fill the mobile number");

  } else if (!mobilePattern.test(mobileValue)) {
    setErrorFor(mobile, "Mobile number must be 10 digits.");
  }
  else {
    setSuccessFor(mobile);
  }

  if (usernameValue === '' || firstNameValue === '' || lastNameValue === '' || emailValue === '' || passwordValue === '' || cnfpasswordValue === '' || cnfpasswordValue !== passwordValue || mobileValue === '' || !isEmail(emailValue) || !mobilePattern.test(mobileValue)) {
    return false;
  }

  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  const userExists = existingUsers.some(user => user.usernameValue === usernameValue || user.emailValue === emailValue);
  if (userExists) {
    alert("Username or email already exists!");
    return;
  }

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const toDay = currentDate.getDay();
  const time = toDay + "/" + month + "/" + year;
  // Store user in local storage
  const newUser = {
    usernameValue,
    firstNameValue,
    lastNameValue,
    emailValue,
    cnfpasswordValue,
    mobileValue,
    time
  };
  existingUsers.push(newUser);
  localStorage.setItem("users", JSON.stringify(existingUsers));

  alert("Registration successful!");
  window.location.href = "login.html"; // Redirect to login page

}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

