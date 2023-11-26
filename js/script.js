// My Code
// =========================================================================

// Array of options
const options = {
  length: { id: "length", value: 10, element: null },
  lowercase: { id: "lowercase", value: false, maxed: false, element: null },
  uppercase: { id: "uppercase", value: false, maxed: false, element: null },
  numbers: { id: "numbers", value: false, maxed: false, element: null },
  special: { id: "special", value: false, maxed: false, element: null },
};

function setup() {
  // Get elements
  for (const key in options) {
    const option = options[key];
    option.element = document.querySelector("#" + option.id);
    console.log(option);
  }

  // Set event listener on top level form
  let form = document.querySelector("form");
  form.addEventListener("input", handleInput);
}

function handleInput() {
  console.log("handleInput");
}

setup();

// Original Starter Code
// =========================================================================

// Function to prompt user for password options
function getPasswordOptions() {}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {}

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
