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
  }

  // Set event listener on top level form
  let form = document.querySelector("form");
  form.addEventListener("input", handleInput);
}

// Handle - Update Input
function handleInput(e) {
  let target = e.target;
  let id = target.id;
  let option = options[id];
  let element = option.element;
  option.value = element.type == "text" ? element.value : element.checked;
}

// Get a random element from an array
function getRandom(array) {
  let length = array.length;
  let randomIndex = randomNumber(0, length - 1);
  return array[randomIndex];
}

// Generate password with user options
function generatePasswordSimple() {
  let length = options.length.value;
  if (!length) {
    // pw length is option is EMPTY
    return;
  }
  let pw = "";
  for (let i = 0; i < length; i++) {
    let optionsArray = Object.values(options);
    let option = optionsArray[randomNumber(1, 4)];
    let char = getRandom(window[option.id]);
    if (!option.maxed) {
      let char = getRandom(window[option.id]);
      pw += char;
    }
  }
  return pw;
}

// Utility Fuctions
// =========================================================================

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

setup();

// Original Starter Code
// =========================================================================

// Function to prompt user for password options
function getPasswordOptions() {}

// IMPLEMENTED
// // Function for getting a random element from an array
// function getRandom(arr) {}

// IMPLEMENTED
// // Function to generate password with user input
// function generatePassword() {}

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
