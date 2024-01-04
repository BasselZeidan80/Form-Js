var submit = document.getElementById("submit");
var inputs = document.querySelectorAll("input");
var email = document.getElementById("email");
var password = document.getElementById("Password");
var emailRegex = /^[a-zA-Z0-9]{3,30}@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
var passRegex = /^[A-z0-9@#$_!-]{8,}$/;
var validText = document.getElementById("valid");
var invalidText = document.getElementById("invalid");
var forget = document.getElementById("forget");
var xmark = document.getElementById("xmark");
var layerForget = document.getElementById("layerForget");

if (localStorage.getItem("Users") != null) {
  arrList = JSON.parse(localStorage.getItem("Users"));
}

submit.addEventListener("click", function () {
  var inputsUs = {
    email: email.value,
    pass: password.value,
  };

  if (ValidationInputs() == true) {
    if (arrList.length == 0) {
      console.log("sssssssss");
    } else {
      var exist = false;
      for (var i = 0; i < arrList.length; i++) {
        // console.log(arrList[i].email, email.value);

        if (
          arrList[i].email == email.value &&
          arrList[i].pass == password.value
        ) {
          // alert("exist");
          console.log("exist");

          exist = true;
          console.log("Invalid Email or password");
          break;
        }
      }

      if (exist) {
        window.location.href = `./Home.html`;
        clearForm();
      } else {
        alertify.error("Invalid Email or password");
        // console.log("Invalid Email or password");

        // window.location.href = "/";
      }
    }
  }

  // clearForm();
  console.log(inputsUs);
});

function clearForm() {
  email.value = "";
  password.value = "";
}

function ValidationInputs() {
  if (
    emailRegex.test(email.value) == true &&
    passRegex.test(password.value) == true
  ) {
    console.log("validaton accepted");
    return true;
  } else {
    alertify.error("Invalid email or password");

    // invalidText.classList.remove("d-none");
    // validText.classList.add("d-none");
    return false;
  }
}

forget.addEventListener("click", function () {
  layerForget.classList.remove("d-none");
});

xmark.addEventListener("click", function () {
  layerForget.classList.add("d-none");
});
