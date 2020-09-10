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
// * for{var i=0} ; (i<"user prompt" ; i++){}


// TODO: Add validation to make sure at least 1 character is selected.
// TODO: add validation to length for between 8-128 characters
// TODO: after all prompts done, 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
