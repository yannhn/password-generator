// DOM

// PW length
const pwdLengthElement = document.querySelector('[data-js="pwdLength"]');

// Checkboxes
const numbersElement = document.querySelector('[data-js="selectNumbers"]');
const upperCaseElement = document.querySelector('[data-js="selectUpperCase"]');
const lowerCaseElement = document.querySelector('[data-js="selectLowerCase"]');
const specialElement = document.querySelector('[data-js="selectSpecial"]');

// Result
const resultElement = document.querySelector('[data-js="result-span"]');

////////////////////////////////////

numbersElement.addEventListener("click", () => {
  console.log(getRandomNumber());
});

upperCaseElement.addEventListener("click", () => {
  console.log(getRandomUpperCaseCharacter());
});

lowerCaseElement.addEventListener("click", () => {
  console.log(getRandomLowerCaseCharacter());
});

specialElement.addEventListener("click", () => {
  console.log(getRandomSpecialCharacter());
});

// charactersArray
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const charactersUpperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const charactersLowerCase = charactersUpperCase.map((element) => {
  return element.toLowerCase();
});

const specialCharacters = [".", "*", ":", ";", "/"];

//Functions to get random
const getRandomNumber = () => {
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  return randomNumber;
};

const getRandomUpperCaseCharacter = () => {
  const randomUpper =
    charactersUpperCase[Math.floor(Math.random() * charactersUpperCase.length)];
  return randomUpper;
};

const getRandomLowerCaseCharacter = () => {
  const randomLower =
    charactersLowerCase[Math.floor(Math.random() * charactersLowerCase.length)];
  return randomLower;
};

const getRandomSpecialCharacter = () => {
  const randomSpecial =
    specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  return randomSpecial;
};
