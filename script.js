// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  if (password === null) {
    return 
    // Ends function writePassword() if generatePassword() does not return a value (i.e. output is null)
    // so that previous  output is not overwritten with null.
  }
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Object contatining all allowable password characters to be filtered and parsed in generatePassword()
const allowedCharacters = {
  upperAlphas: [...Array(26)].map((_, i) => String.fromCharCode(i + 65)), 
  // Creates an array of lenght 26 and defines the alphabet in uppercase using ascii code values
  lowerAlphas: [...Array(26)].map((_, i) => String.fromCharCode(i + 97)),
  // Creates an array of lenght 26 and defines the alphabet in lowercase using asciicode values
  numberList: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  specialCharcters: [
    '!', '"', '#', '$', '%', '&', "'", '(', ')', '*',
    '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?',
    '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'
  ]
}

function generatePassword() {
  let allowedCharactersKeys = Object.keys(allowedCharacters); 
  // Array containing all keys in the allowedCharacters objects, used for filtering purposes.
  let generatedPassword = [];
  let passwordLength = prompt("Please enter the amount of characters for your password");
  while (passwordLength) {
    // While statement to check if the prompt was canceled thus cancelling the rest of the function
    if (passwordLength > 128) { // Length check greater than 128. If exceeded, function is recalled to start over.
      alert("Error! Your password must be less than 129 characters long. Please enter a valid argument.");
      return generatePassword();
    } else if (passwordLength < 8) { // Length at least 8. If not met, function is recalled to start over.
      alert("Error! Your password must be at least 8 characters long. Please enter a valid argument.");
      return generatePassword();
    } else if (isNaN(parseInt(passwordLength, 10))) { // Checks if prompt input is an integer values, function recalled if not.
      alert("Error! Not a valid argument. Please enter an integer value to define password length.");
      return generatePassword();
    } else {
      if (!confirm("Include Numbers?")) { // If numbers are selected to be omitted this statement will be true and run.
        keyIndex = allowedCharactersKeys.indexOf('numberList'); 
        allowedCharactersKeys.splice(keyIndex, 1);
        // Removing unwanted values key from our array of choosable keys.
      }
      if (!confirm("Include Special Characters?")) {
        keyIndex = allowedCharactersKeys.indexOf('specialCharacters');
        allowedCharactersKeys.splice(keyIndex, 1);
        // Removing unwanted values key from our array of choosable keys.
      }
      for (var i = 0; i < passwordLength; i++) {
        let randomKey = allowedCharactersKeys[Math.floor(Math.random() * (allowedCharactersKeys.length))];
        // Randomizing which key in our object we choose our value from for better random distribution
        let randomIndex = Math.floor(Math.random() * (allowedCharacters[randomKey].length));
        // Selecting random index within the selected random array and storing to a variable
        generatedPassword.push(allowedCharacters[randomKey][randomIndex]);
        // Pushing the new random value into our generatePassword array
      }
      return generatedPassword.join(""); // Final output of our random array of allowed characters joined as a string
    }
  }
  return null; // In the event the function is canceled before a length is inputted, null is outputted
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
