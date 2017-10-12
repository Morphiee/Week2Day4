
var userid = "Test123"
var passid = "Test1234!"

function login() {
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;
  console.log(user, pass)
  if (user === pass) {
    document.getElementById("outputText").innerHTML = "Username and pass cannot be the same!"
  } else if (user.length < 6 && pass.length < 6 ) {
    document.getElementById("outputText").innerHTML = "Username and password must be 6 characters long."

  } else if (user.includes("!", "#", "$")) {
    document.getElementById("outputText").innerHTML = "Username cannot contain these characters! '!#$'"

  } else if (!pass.includes("!", "#", "$", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0)) {
    document.getElementById("outputText").innerHTML = "Password must contain these characters! '!#$' and one number!"

  } else if (pass === "password") {
    document.getElementById("outputText").innerHTML = "Password cannot be password!"

  } else if (userid === user && passid === pass) {
     document.getElementById("outputText").innerHTML = "You logged in!"

  } else {
    document.getElementById("outputText").innerHTML = "Invalid user / pass!"
  }

}
