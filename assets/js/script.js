// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword(){

  var possiblePw="";

  var pwLength = window.prompt("How long do you want your generated password to be? (Must be between 8 and 128 characters)");

  if (pwLength <8 || pwLength >128 || !Number.isInteger(Number(pwLength))) {

  }


  // console.log(pwLength);

  var upper = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
  var lower = "abcdefghijklmnopqrstuvxyz";
  var numbers = "0123456789";
  var specials = "!@#$%&*()+?";

  var wantsUpper = window.confirm("Do you want upercase letters is your password?")
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
    for (var i=0; i< pwLength; i++ ) {
      Math.floor(Math.random() * possiblePw.length);
      result
    }

    return possiblePw

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
