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

// ask the user how many characters should be in the password
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

function useLowerCase() {
  useLowerCaseLtrs = confirm("Do you want lower case letters in the password?");
  console.log(useLowerCaseLtrs);
}

function useUpperCase() {
  useUpperCaseLtrs = confirm("Do you want uppercase case letters in the password?");
  console.log(useUpperCaseLtrs);
}

function useNumbers() {
  useNumeric = confirm("Do you want numbers in the password?");
  console.log(useNumeric);
}

function useSpecial() {
  useSpecialChar = confirm("Do you want special characters in the password?");
  console.log(useSpecialChar);
}

function validatePassword() {
  if (useLowerCaseLtrs || useUpperCaseLtrs || useNumeric || useSpecialChar) {
    validated = true;
  }
  else {
    alert("Please choose at least one type of character setting (lowercase, uppercase, numbers, or special characters).");
    validated = false;
  }
}

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