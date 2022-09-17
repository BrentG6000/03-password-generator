// Assignment Code
var generateBtn = document.querySelector("#generate");

//Global variable
var numString = "0123456789";
var lowCaseString = "abcdefghijklmnopqrstuvwxyz";
var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialString = "!@#$%^&* ()";
var numOfCharacters;
var useLowerCaseLtrs;
var useUpperCaseLtrs;
var useNumeric;
var useSpecialChar;
var validated = false;

// Ask the user how many characters should be in the generated password. The while loop prevents passwords that aren't the required size. 
function howManyCharacters() {
  var correctNum = false;
  while (!correctNum) {
    numOfCharacters = parseInt(prompt("How many characters do you want in your new password? (8-128 characters allowed)"));
    if (numOfCharacters < 8 || numOfCharacters > 128) {
      alert("Length of password cannot be less than 8 or more than 128 characters long. Please select a different number.");
    }
    else {
      correctNum = true;
    }
  }
}

// Ask the user how if they want lowercase letters in their generated password.
function useLowerCase() {
  useLowerCaseLtrs = confirm("Do you want lower case letters in the password?");
}

// Ask the user how if they want capital letters in their generated password.
function useUpperCase() {
  useUpperCaseLtrs = confirm("Do you want uppercase case letters in the password?");
}

// Ask the user how if they want numbers in their generated password.
function useNumbers() {
  useNumeric = confirm("Do you want numbers in the password?");
}

// Ask the user how if they want special characters in their generated password.
function useSpecial() {
  useSpecialChar = confirm("Do you want special characters in the password?");
}

// Checks if the user picked at least one of the character options.
function validatePassword() {
  if (useLowerCaseLtrs || useUpperCaseLtrs || useNumeric || useSpecialChar) {
    validated = true;
  }
  else {
    alert("Please choose at least one type of character setting (lowercase, uppercase, numbers, or special characters).");
    validated = false;
  }
}

/* Runs all the password questions and the validation. Then it adds all the picked character choices to a string.
  Then a for loop uses a random numnber to pick from the newly created string as many times as needed. The new
  password is returned. */
function generatePassword() {
  while (!validated) {
    console.log("Start here.");
    howManyCharacters();
    useLowerCase();
    useUpperCase();
    useNumbers();
    useSpecial();
    validatePassword();
  }

  var charsToPickFrom ="";

  if (useLowerCaseLtrs) {
    charsToPickFrom += lowCaseString;
  }
  if (useUpperCaseLtrs) {
    charsToPickFrom += upperCaseString;
  }
  if (useNumeric) {
    charsToPickFrom += numString;
  }
  if (useSpecialChar) {
    charsToPickFrom += specialString;
  }

  var password = "";

  for (var i = 0; i < numOfCharacters; i++) {
    var randomNumber = Math.floor(Math.random() * charsToPickFrom.length);
    password += charsToPickFrom.substring(randomNumber, randomNumber + 1);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);