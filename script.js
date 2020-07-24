// Assignment Code
var generateBtn = document.querySelector("#generate");
let lowerCase = `abcdefghijklmnopqrstuvwxyz` // lowerCase[ 0 - 25 ]
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' // upperCase[ 0 - 25 ]
let numeric = '1234567890' // numeric[ 0 - 9]
let special = "#$%&'()*+,-./:;<=>?@[]^!_`{|}~" // [ 0 - 29] double quote and backslash are excluded
let passwordLength = '' // min 8 max 128
let possibleCharacters = ''
let userPassword = ''
let guaranteedCriteria = ''


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
    guaranteedCriteria += lowerCase[Math.floor(Math.random() * lowerCase.length)]
  }
}

// Uppercase add
function confirmUpperCase() {
  if (confirm('Will the password include uppercase characters?')) {
    possibleCharacters += upperCase
    guaranteedCriteria += upperCase[Math.floor(Math.random() * upperCase.length)]
  }
}

// Numbers add
function confirmNumeric() {
  if (confirm('Will the password include numbers?')) {
    possibleCharacters += numeric
    guaranteedCriteria += numeric[Math.floor(Math.random() * numeric.length)]
  }
}

// Special Characters add
function confirmSpecial() {
  if (confirm('Will the password include special characters?')) {
    possibleCharacters += special
    guaranteedCriteria += special[Math.floor(Math.random() * special.length)]
  }
}

// Password Generator
function generatePassword() {
  for (let i = 0; i < passwordLength - guaranteedCriteria.length; i++) {
    userPassword += possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]
  }
for (let i = guaranteedCriteria.length; i > 0; i--) {
  console.log(userPassword)
  let position =  (Math.floor(Math.random() * userPassword.length))
  let addedthingy = guaranteedCriteria[Math.floor(Math.random() * guaranteedCriteria.length)]
  guaranteedCriteria = guaranteedCriteria.replace(addedthingy, '')
  console.log(`addedthingy: ${addedthingy}`)
  console.log(`position: ${position}`)
  userPassword = [userPassword.slice(0, position), addedthingy, userPassword.slice(position)].join('');
  console.log(guaranteedCriteria)
  console.log(userPassword)}
  return userPassword
}

// Password Criteria Check


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