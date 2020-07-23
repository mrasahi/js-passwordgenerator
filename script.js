// Assignment Code
var generateBtn = document.querySelector("#generate");
let lowerCase = `abcdefghijklmnopqrstuvwxyz` // lowerCase[ 0 - 25 ]
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' // upperCase[ 0 - 25 ]
let numeric = '1234567890' // numeric[ 0 - 9]
let special = "#$%&'()*+,-./:;<=>?@[]^!_`{|}~" // [ 0 - 29] double quote and backslash are excluded
let passwordLength  // min 8 max 128
let possibleCharacters = ''
let PasswordText =''

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }





function promptLength() {
  passwordLength = parseInt(prompt('How long do you want your password? Min 8 Max 128'))
  if (passwordLength) {
    alert('Please enter a number')
    return
  }
  if (passwordLength > 8 || passwordLength < 128) {
    alert('Please enter a number between 8 and 128')
    return
  }
}



// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


generateBtn.addEventListener("click", () => {
  promptLength()
  // function 4
  // writePassword;
})

