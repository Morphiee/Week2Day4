
// Hi / lo Game

// function isNumber(userInput) {
//   var userNum = parseInt(userInput, 10);
//   if (userNum.toString == "NaN") {
//     var userInput = prompt("Guess what our random number is.");
//   } else {
//     return (userNum);
//   }
// }
// function hiLo (){
//   var randNum = Math.floor(Math.random() * 100);
//   console.log(randNum);
//
//   var userInput = document.getElementsById("inputField").value;
//     var userNum = isNumber(userInput);
//     document.getElementsById("outputText").innerHTML = userInput;
//
//   var userTries = 0;
//   while (userNum != randNum){
//     if (userNum > randNum){
//       document.getElementsById("outputText").innerHTML = userNum + " is too high! Guess again!";
//     } else if (userNum < randNum){
//       document.getElementsById("outputText").innerHTML = userNum + " is too low! Guess again!";
//     } else {
//       alert("You Rock!!" + userNum + " is our number!!");
//     }
//     userTries += 1;
//     if (userTries >= 7) {
//       return alert("Bummer! too many tries. 7 was your limit!")
//     }
//   }
//   alert("You guessed our number!!");
// }


// function hiLo () {
//   var randNum = Math.floor(Math.random() * 100);
//   console.log(randNum);
//   var randNum = document.getElementById("inputField").value
//   document.getElementById("outputText").innerHTML = randNum;
//
//   if (!randNum){
//     return console.log("Nooo, don't leave!");
//   } else if (randNum === randNum) {
//     return console.log("Correct, You guessed our number!")
//   } else if (randNum)

function isNumber(userInput) {
  var userNum = parseInt(userInput, 10);
  if (userNum.toString == "NaN") {
    var userInput = prompt("Guess what our random number is.");
  } else {
    return (userNum);
  }
}

var randNum = Math.floor(Math.random() * 100);
console.log(randNum);
var userTries = 0;

function hiLo () {

  var userInput = document.getElementById("inputField").value;
  var userNum = isNumber(userInput);

  if (userNum > randNum){
    document.getElementById("outputText").innerHTML = userInput + " is too high! Guess again!";
    document.getElementById("inputField").value = " ";
  } else if (userNum < randNum) {
    document.getElementById("outputText").innerHTML = userInput + " is too low! Guess again!";
    document.getElementById("inputField").value = " ";
  } else if (userNum === randNum) {
    document.getElementById("outputText").innerHTML = "You Rock!! " + userNum + " is our number!!";
  }
  userTries += 1;
  if (userTries >= 7) {
    document.getElementById("outputText").innerHTML = ("Bummer! too many tries. 7 was your limit!")
    return 0;
  }
}

function reset() {
  location.reload();
}
