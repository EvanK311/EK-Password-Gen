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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
