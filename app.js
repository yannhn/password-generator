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

////////////////////////////////////

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

console.log;

const getRandomFunctions = {
  getNumber: getRandomNumber,
  getUpperCase: getRandomUpperCaseCharacter,
  getLowerCase: getRandomLowerCaseCharacter,
  getSpecial: getRandomSpecialCharacter,
};

////////////////////////////////////

// DOM

// PW length
const pwdLengthElement = document.querySelector('[data-js="pwdLength"]');

// Checkboxes
const numbersElement = document.querySelector('[data-js="selectNumbers"]');
const upperCaseElement = document.querySelector('[data-js="selectUpperCase"]');
const lowerCaseElement = document.querySelector('[data-js="selectLowerCase"]');
const specialElement = document.querySelector('[data-js="selectSpecial"]');

// Result
const generatePwdElement = document.querySelector(
  '[data-js="generate-button"]'
);
const resultElement = document.querySelector('[data-js="result-span"]');

////////////////////////////////////

generatePwdElement.addEventListener("click", () => {
  const pwdLength = pwdLengthElement.value;
  const pwdLengthNumber = Number(pwdLength);
  console.log(pwdLengthNumber);

  const checkedNumbersElement = numbersElement.checked;
  const checkedUpperElement = upperCaseElement.checked;
  const checkedLowerElement = lowerCaseElement.checked;
  const checkedSpecialElement = specialElement.checked;

  resultElement.innerHTML = generateNewPassword(
    checkedNumbersElement,
    checkedUpperElement,
    checkedLowerElement,
    checkedSpecialElement,
    pwdLengthNumber
  );
});

/////////////////////////////////
// Generate Password
function generateNewPassword(
  getNumber,
  getUpperCase,
  getLowerCase,
  getSpecial,
  pwdLengthNumber
) {
  // 1. create new String
  let newPassword = "";
  // 2. filter out checked types
  const countCheckboxes = getNumber + getUpperCase + getLowerCase + getSpecial;
  console.log(countCheckboxes);

  const checkboxArray = [
    { getNumber },
    { getUpperCase },
    { getLowerCase },
    { getSpecial },
  ];
  console.log(checkboxArray);
  const filteredCheckboxArray = checkboxArray.filter(
    (checkbox) => Object.values(checkbox)[0]
  );
  console.log(filteredCheckboxArray);

  if (countCheckboxes === 0) {
    alert("Please select a checkbox");
  }
  // 3. loop over length call generator

  for (let i = 0; i < pwdLengthNumber; i += countCheckboxes) {
    filteredCheckboxArray.forEach((item) => {
      const functionName = Object.keys(item)[0];

      newPassword += getRandomFunctions[functionName]();
    });
  }
  const finalPassword = newPassword.slice(0, pwdLengthNumber);
  console.log(finalPassword);
  return finalPassword;

  // 4. add final pw to new string
}
