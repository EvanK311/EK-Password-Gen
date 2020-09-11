// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// TODO: Create the generatePassword function. Returns final password and all code should live inside this function.
 

// TODO: Need prompt to ask length of password then save that to VAR

// TODO: Create a Confirm to ask if user wants lowercase characters
// TODO: Create a Confirm to ask if user wants uppercase characters
// TODO: Create a Confirm to ask if user wants numbers characters
// TODO: Create a Confirm to ask if user wants special characters
 

// TODO: Create conditional for master array that is fed by sub arrays for lowercase, uppercase, etc. using if statements.
// TODO: Create variable that holds sub array choices(MasterArray).
// TODO: Create variable that holds characters the user wants
// TODO: Select the specific number of characters chosen randomly by user according to how long password length selected was.

// can use Math.floor(Math.random()) to get random numbers. use For loop that occurs the length of # of characters selected by user.
// * for(var i=0 ; i<"user prompt" ; i++){}

// TODO: inside forloop, push each character into final array
// TODO: create array variable to hold final password.


// TODO: Add validation to make sure at least 1 character is selected.
// TODO: add validation to length for between 8-128 characters
// TODO: after all prompts done, 

// Add event listener to generate button
var uCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var ranNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var ranSpec = ["!", "@", "#", "$", "&", "%", "?","(",")"]
var passMaster = []
var lastPass = ""



generateBtn.addEventListener("click", writePassword) 
  


function generatePassword() {
  var pLength = prompt("What length of password do you need? Enter a number between 8 and 128")
  if (pLength < 8 || pLength > 128) {
    prompt("You must enter a number between 8 and 128")
  }
  console.log(pLength)

  
  var l = confirm("Would you like to include lowercase letters?")
  if (l) {
    for (i = 0; i < lCase.length; i++) {
      passMaster.push(lCase[i])
      // console.log(lCase)
    }
  }
 
  var u = confirm("Would you like to include uppercase letters?")
  if (u) {
    for (i = 0; i < uCase.length; i++) {
      passMaster.push(uCase[i])
      // console.log(uCase)
    }
  }
    
  var passNum = confirm("Would you like to include numbers?")
  if (passNum) {
    for (i = 0; i < ranNum.length; i++) {
      passMaster.push(ranNum[i])
      // console.log(ranNum)
    }
  }
  var specChar = confirm("Would you like to include special characters?")
  if (specChar) {
    for (i = 0; i < specChar.length; i++) {
      passMaster.push(specChar[i])
      // console.log(ranSpec)
    }
  }
  console.log(passMaster)
  
  for(p = 0; p < pLength; p++) {
    lastPass += passMaster[Math.floor(Math.random() * passMaster.length)];
    
    // console.log(lastPass)
    // console.log(passMaster)
  }
  return lastPass
}
  
