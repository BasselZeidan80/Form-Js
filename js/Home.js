var user = document.getElementById("user");

var logout = document.getElementById("logout");

if (localStorage.getItem("Users") != null) {
  arrList = JSON.parse(localStorage.getItem("Users"));
}

//logout function
logout.addEventListener("click", function () {
  window.location.href = "./";
});

//getUser Name
function getUser() {
  for (var i = 0; i < arrList.length; i++) {
    var userName = arrList[i].Name;
    console.log(userName);
    user.innerHTML = `Welcome ${userName}`;
  }
}

getUser();
