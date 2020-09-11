
var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var uCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var ranNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var ranChar = ["!", "@", "#", "$", "&", "%", "?","(",")"]
var passMaster = []
var lastPass = ""

generateBtn.addEventListener("click", writePassword) 
  

function generatePassword() {
  passMaster = []
  lastPass = ""
  var pLength = prompt("What length of password do you need? Enter a number between 8 and 128")
  if (pLength < 8 || pLength > 128) {
    prompt("You must enter a number between 8 and 128")
  }
  
  
  var l = confirm("Would you like to include lowercase letters?")
  if (l) {
    for (i = 0; i < lCase.length; i++) {
      passMaster.push(lCase[i])
      
    }
  }
 
  var u = confirm("Would you like to include uppercase letters?")
  if (u) {
    for (i = 0; i < uCase.length; i++) {
      passMaster.push(uCase[i])
      
    }
  }
    
  var passNum = confirm("Would you like to include numbers?")
  if (passNum) {
    for (i = 0; i < ranNum.length; i++) {
      passMaster.push(ranNum[i])
     
    }
  }
  var specChar = confirm("Would you like to include special characters?")
  if (specChar) {
    for (i = 0; i < ranChar.length; i++) {
      passMaster.push(ranChar[i])
      
    }
  }
  else if (l && u && passNum && specChar === False) {
    prompt("You must make at least 1 selection")
  }
    
  for(p = 0; p < pLength; p++) {
    lastPass += passMaster[Math.floor(Math.random() * passMaster.length)];
  }
  return lastPass
}
  
