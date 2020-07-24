// Assignment Code
var generateBtn = document.querySelector("#generate");
let lowerCase = `abcdefghijklmnopqrstuvwxyz` // lowerCase[ 0 - 25 ]
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' // upperCase[ 0 - 25 ]
let numeric = '1234567890' // numeric[ 0 - 9]
let special = "#$%&'()*+,-./:;<=>?@[]^!_`{|}~" // [ 0 - 29] double quote and backslash are excluded
let passwordLength = '' // min 8 max 128
let possibleCharacters = ''
let userPassword = ''


// Password box reset
function userPasswordReset() {
  passwordLength = ''
  possibleCharacters = ''
  userPassword = ''
}

// Password Length
function promptLength() {
  passwordLength = (prompt('How long do you want your password? Min: 8 Max: 128'))
}

// Lowercase add
function confirmLowerCase() {
  if (confirm('Will the password include lowercase characters?')) {
    possibleCharacters += lowerCase
  }
}

// Uppercase add
function confirmUpperCase() {
  if (confirm('Will the password include uppercase characters?')) {
    possibleCharacters += upperCase
  }
}

// Numbers add
function confirmNumeric() {
  if (confirm('Will the password include numbers?')) {
    possibleCharacters += numeric
  }
}

// Special Characters add
function confirmSpecial() {
  if (confirm('Will the password include special characters?')) {
    possibleCharacters += special
  }
}

// Password Generator
function generatePassword() {
  for (let i = 0; i < passwordLength; i++) {
    userPassword += possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]
  }
  return userPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  userPasswordReset()
  promptLength()
  // Check for password length
  if ((passwordLength < 8 || passwordLength > 128) ||
      (isNaN(passwordLength))) {
    alert('Please input a number between 8 and 128')
    return
  }
  confirmLowerCase()
  confirmUpperCase()
  confirmNumeric()
  confirmSpecial()
  // Check for password criteria
  if (possibleCharacters.length === 0) {
    alert('Please enter at least one criteria for the password')
    return
  }
  writePassword()
})