// Assignment code here
function generatePassword(){

  var possiblePw="";

  var pwLength = window.prompt("How long do you want your generated password to be? (Must be between 8 and 128 characters)");




  console.log(pwLength);

  var upper = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
  var lowwer = "abcdefghijklmnopqrstuvxyz";
  var numbers = "0123456789";
  var specials = "!@#$%&*()+?";
  



}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
