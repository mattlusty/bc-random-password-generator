// Options
// =========================================================================

// Password Length (Option)
let passwordLength = { id: "length", value: 10, element: null };

// Checkbox Options
const options = {
  lowercase: { id: "lowercase", value: false, used: 0, maxed: false, element: null },
  uppercase: { id: "uppercase", value: false, used: 0, maxed: false, element: null },
  numbers: { id: "numbers", value: false, used: 0, maxed: false, element: null },
  special: { id: "special", value: false, used: 0, maxed: false, element: null },
};

// Functions
// =========================================================================

function setup() {
  // Initialise PW length object - with element
  initElement(passwordLength);

  // Set event listener - on PW length element
  passwordLength.element.addEventListener("input", handleLengthInput);

  // Initialise other option objects - with elements
  Object.values(options).forEach((option) => {
    initElement(option);
  });

  // Set a single event listener - on top level form - (for all check option elements)
  document.querySelector("form").addEventListener("input", handleCheckInput);
}

// Handle - Update Password Length Input
function handleLengthInput(e) {
  // Event is exclusively for pw length element - so prevent going up to other event listener
  e.stopPropagation();

  // Update object value
  passwordLength.value = passwordLength.element.value;
}

// Handle - Update Checkbox Inputs
function handleCheckInput(e) {
  let option = options[e.target.id];
  let element = option.element;
  option.value = element.checked;
}

// Get a random element from an array
function getRandom(array) {
  let randomIndex = randomNumber(0, array.length - 1);
  return array[randomIndex];
}

// SIMPLE
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

// COMPLEX
// Generate password with user options
function generatePassword2() {
  let pwLength = passwordLength.value;

  // Return if no password length!
  if (!pwLength) return "Password Length not set!";

  // Initialise array with included options
  let includeOptions = [];
  let i = 0;

  Object.values(options).forEach((option) => {
    if (option.value) {
      includeOptions[i] = { id: option.id, count: 0 };
      i++;
      // last iteration leaves i = array length
    }
  });

  // Return if no Options selected!
  if (includeOptions.length == 0) return "No Options Selected!";

  let charsPerType = includeOptions.length ? Math.ceil(pwLength / includeOptions.length) : 0;

  // console.log("includeOptions.length", includeOptions.length);
  console.log("charsPerType:", charsPerType);

  let pw = "";
  let test = "";

  for (let i = 0; i < pwLength; i++) {
    console.log("i: ", i);
    let randomIndex = randomNumber(0, includeOptions.length - 1);
    let includeOption = includeOptions[randomIndex];
    includeOption.count++;
    console.log("includeOption.id: ", includeOption.id);
    console.log("includeOption.count: ", includeOption.count);
    let char = getRandom(window[includeOption.id]);
    pw += char;
    // Remove char type option over charsPerType
    if (includeOption.count == charsPerType) {
      // remove element at the randomIndex
      let removed = includeOptions.splice(randomIndex, 1);
      console.log("Removed: ", removed);
    }
  }
  return pw;
}

// Initiate Code
// =========================================================================

setup();

// Helper Functions
// =========================================================================

function initElement(obj) {
  obj.element = document.querySelector("#" + obj.id);
}

function removeAtIndex(array, index) {
  array.splice(index, 1);
}

// Utility Fuctions
// =========================================================================

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

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

// IMPLEMENTED
// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
