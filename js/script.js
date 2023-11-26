// GLOBAL VARIABLES
// =========================================================================

// Password Length (Option)
let passwordLength = { id: "length", value: 10, element: null };

// Checkbox Options
const options = ["lowercase", "uppercase", "numbers", "special"];

// SETUP CODE
// =========================================================================

// Add event listener to Generate Button
var generateButton = document.querySelector("#generate");
generateButton.addEventListener("click", displayPassword);

// Element to display password - used by writePassord()
let passwordDisplay = document.querySelector("#password");

// Password Generator
// =========================================================================

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
