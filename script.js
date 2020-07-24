// Assignment Code
var generateBtn = document.querySelector("#generate");
let lowerCase = `abcdefghijklmnopqrstuvwxyz` // lowerCase[ 0 - 25 ]
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' // upperCase[ 0 - 25 ]
let numeric = '1234567890' // numeric[ 0 - 9]
let special = "#$%&'()*+,-./:;<=>?@[]^!_`{|}~" // [ 0 - 29] double quote and backslash are excluded
// min 8 max 128
let possibleCharacters = ''
let PasswordText =''

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Password Length
function promptLength() {
  passwordLength = parseInt(prompt('How long do you want your password? Min 8 Max 128'))
  if (passwordLength < 8 || passwordLength > 128) {
    alert('Please enter a number between 8 and 128')
    return
  }
  console.log(passwordLength) // DELETE LATER: debug check
}

// Lowercase add
function confirmLowerCase() {
  if (confirm('Will the password include lowercase characters?')) {
    possibleCharacters += lowerCase
  }
  console.log(possibleCharacters)
}

// Uppercase add
function confirmUpperCase() {
  if (confirm('Will the password include uppercase characters?')) {
    possibleCharacters += upperCase
  }
  console.log(possibleCharacters)
}

// Numbers add
function confirmNumeric() {
  if (confirm('Will the password include numbers?')) {
    possibleCharacters += numeric
  }
  console.log(possibleCharacters)
}

// Special Characters add
function confirmSpecial() {

}

// 
function confirmConfirm() {
  confirm(`Your choices are`)
}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


generateBtn.addEventListener("click", () => {
  promptLength()
  confirmLowerCase()
  confirmUpperCase()
  confirmNumeric()
  // function 1
  // function 4
  // writePassword;
})

