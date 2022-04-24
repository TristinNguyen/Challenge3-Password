// Assignment code here

function generatePassword() {

  var possiblePw="";

  var pwLength = window.prompt("How long do you want your generated password to be? (Must be between 8 and 128 characters)");

  while (pwLength < 8 || pwLength > 128 || !Number.isInteger(Number(pwLength))) {
    pwLength = window.prompt ("Password must be between 8 and 128!")

  }


  // console.log(pwLength);

  var upper = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
  var lower = "abcdefghijklmnopqrstuvxyz";
  var numbers = "0123456789";
  var specials = "!@#$%&*()+?";

  var wantsUpper = window.confirm("Do you want uppercase letters is your password?")
  var wantsLower = window.confirm("Do you want lowercase letters in your password?")
  var wantsNumber = window.confirm("Do you want numbers in your password?")
  var wantsSpecial = window.confirm("Do you want special characters in your password?")

    if (wantsUpper===true) {
      possiblePw = possiblePw + upper;

    }

    if (wantsLower===true) {
      possiblePw = possiblePw + lower;

    }

    if (wantsNumber===true) {
      possiblePw = possiblePw + numbers;

    }

    if (wantsSpecial===true) {
      possiblePw = possiblePw + specials;

    }

    var result = ""
    possiblePw = possiblePw.split('')

    for ( var i=0; i< pwLength; i++ ) {
      Math.floor(Math.random() * possiblePw.length);
      result
    }

    return upper
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
