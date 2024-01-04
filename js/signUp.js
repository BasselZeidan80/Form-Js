var submit = document.getElementById("submit");
var inputs = document.querySelectorAll("input");
var userName = document.getElementById("Uname");
var email = document.getElementById("email");
var password = document.getElementById("Password");
var emailRegex = /^[a-zA-Z0-9]{3,30}@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
var passRegex = /^[A-z0-9@#$_!-]{8,}$/;
var userRegex = /^[a-zA-Z0-9]{3,}$/;
var signUp = document.getElementById("signUp");
var validText = document.getElementById("valid");
var invalidText = document.getElementById("invalid");
var msg_Error = document.getElementById("msg-error");
// Validation -----

var arrList = [];

if (localStorage.getItem("Users") != null) {
  arrList = JSON.parse(localStorage.getItem("Users"));
}

signUp.addEventListener("click", function () {
  var inputsUs = {
    Name: userName.value,
    email: email.value,
    pass: password.value,
  };

  if (ValidationInputs() == true) {
    if (arrList.length == 0) {
      arrList.push(inputsUs);
      localStorage.setItem("Users", JSON.stringify(arrList));
    } else {
      var exist = false;
      for (var i = 0; i < arrList.length; i++) {
        // console.log(arrList[i].email, email.value);

        if (arrList[i].email == email.value) {
          // alert("exist");
          console.log("exist");

          exist = true;
          break;
        }
      }
      if (exist) {
        msg_Error.classList.remove("d-none");
        validText.classList.add("d-none");
      } else {
        arrList.push(inputsUs);
        localStorage.setItem("Users", JSON.stringify(arrList));
        console.log("pushed");
        window.location.href = "/";
      }
    }
  }

  clearForm();
});

function clearForm() {
  userName.value = "";
  email.value = "";
  password.value = "";
}

function ValidationInputs() {
  if (
    emailRegex.test(email.value) == true &&
    passRegex.test(password.value) == true &&
    userRegex.test(userName.value) == true
  ) {
    console.log("hello", userName.value);
    validText.classList.remove("d-none");
    invalidText.classList.add("d-none");
    return true;
  } else {
    invalidText.classList.remove("d-none");
    validText.classList.add("d-none");
    return false;
  }
}

window.transitionToPage = function (href) {
  document.querySelector("body").style.opacity = 0;
  setTimeout(function () {
    window.location.href = "/";
  }, 500);
};

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("body").style.opacity = 1;
});
