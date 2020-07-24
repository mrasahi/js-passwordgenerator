// Assignment Code
var generateBtn = document.querySelector("#generate");
let lowerCase = `abcdefghijklmnopqrstuvwxyz` // lowerCase[ 0 - 25 ]
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' // upperCase[ 0 - 25 ]
let numeric = '1234567890' // numeric[ 0 - 9]
let special = "#$%&'()*+,-./:;<=>?@[]^!_`{|}~" // [ 0 - 29] double quote and backslash are excluded
let passwordLength = '' // min 8 max 128
let possibleCharacters = ''
let userPassword = ''

// Write password to the #password input

// Password box reset
function userPasswordReset() {
  passwordLength = ''
  possibleCharacters = ''
  userPassword = ''
}

// Password Length
function promptLength() {
  passwordLength = parseInt(prompt('How long do you want your password? Min: 8 Max: 128'))
  // if (passwordLength < 8 || passwordLength > 128) {
  //   alert('Please enter a number between 8 and 128')
  //   return
  // }
  console.log(isNaN(passwordLength)) // DELETE LATER: debug check
}

// Lowercase add
function confirmLowerCase() {
  if (confirm('Will the password include lowercase characters?')) {
    possibleCharacters += lowerCase
  }
  console.log(possibleCharacters) // DELETE LATER: debug check
}

// Uppercase add
function confirmUpperCase() {
  if (confirm('Will the password include uppercase characters?')) {
    possibleCharacters += upperCase
  }
  console.log(possibleCharacters) // DELETE LATER: debug check
}

// Numbers add
function confirmNumeric() {
  if (confirm('Will the password include numbers?')) {
    possibleCharacters += numeric
  }
  console.log(possibleCharacters) // DELETE LATER: debug check
}

// Special Characters add
function confirmSpecial() {
  if (confirm('Will the password include special characters?')) {
    possibleCharacters += special
  }
  console.log(possibleCharacters) // DELETE LATER: debug check
}

// Given write password function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Password Generator
function generatePassword() {
  for (let i = 0; i < passwordLength; i++) {
    userPassword += possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]
  }
  return userPassword
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

