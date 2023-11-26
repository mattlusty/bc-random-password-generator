// GLOBAL VARIABLES
// =========================================================================

// Password Length (Option)
let passwordLength = { id: "length", value: 10, element: null };

// Checkbox Options
const options = ["lowercase", "uppercase", "numbers", "special"];

// SETUP CODE
// =========================================================================

// (1) PW Length

// Not actually needed
// passwordLength.element = document.querySelector("#" + passwordLength.id);
// passwordLength.element.addEventListener("input", handleLengthInput);

// (2) Checkbox Options

// Maybe actually needed
// options.forEach((option) => {
//   option.element = document.querySelector("#" + option.id);
// });
// Set single event listener - to catch all checkbox elements input
// document.querySelector("form").addEventListener("input", handleCheckInput);

// (3) Generate-Button element

// Add event listener to Generate Button
var generateButton = document.querySelector("#generate");
generateButton.addEventListener("click", displayPassword);

// Element to display password - used by writePassord()
let passwordDisplay = document.querySelector("#password");

// EVENT HANDLERS
// =========================================================================

// Non actually needed

// FUNCTIONS
// =========================================================================

// Password Generator - Simple VERSION
function generatePasswordSimple() {
  let pwLength = options.length.value;
  if (!pwLength) return "Password Length not set!";
  let pw = "";
  for (let i = 0; i < pwLength; i++) {
    let optionsArray = Object.values(options);
    let option = optionsArray[randomNumber(1, 4)];
    let char = getRandom(window[option.id]);
    pw += char;
  }
  return pw;
}

// Password Generator - Options Guaranteed VERSION
function generatePassword() {
  let pwLength = document.querySelector("#length").value;
  if (!pwLength) return "Password Length not set!";

  let includeOptions = [];
  let i = 0;
  options.forEach((option) => {
    let checked = document.querySelector("#" + option).checked;
    if (checked) includeOptions[i++] = { id: option, count: 0 };
  });
  if (includeOptions.length == 0) return "No Options Selected!";

  let charsPerType = Math.ceil(pwLength / includeOptions.length);
  let pw = "";
  for (let i = 0; i < pwLength; i++) {
    let randomIndex = getRandomIndex(includeOptions);
    let includeOption = includeOptions[randomIndex];
    let charTypeArray = window[includeOption.id];
    pw += getItemAtRandom(charTypeArray);
    if (++includeOption.count == charsPerType) removeItem(includeOptions, randomIndex);
  }
  return pw;
}

// Helper Functions
// =========================================================================

function displayPassword() {
  passwordDisplay.innerHTML = generatePassword();
}

function removeAtIndex(array, index) {
  array.splice(index, 1);
}

function getItemAtRandom(array) {
  return array[getRandomIndex(array)];
}

function getRandomIndex(array) {
  return getRandomNumber(0, array.length - 1);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function removeItem(array, index) {
  return array.splice(index, 1);
}
