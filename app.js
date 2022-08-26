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

const specialCharacters = ["$", "*", "&", "§", "/"];

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

// Generate Button
const generatePwdElement = document.querySelector(
  '[data-js="generate-button"]'
);

// Result
const resultElement = document.querySelector('[data-js="result-span"]');
const resultSection = document.querySelector(".result-ol");

////////////////////////////////////
// EVENT HANDLING

generatePwdElement.addEventListener("click", () => {
  const pwdLength = pwdLengthElement.value;
  const pwdLengthNumber = Number(pwdLength);

  const checkedNumbersElement = numbersElement.checked;
  const checkedUpperElement = upperCaseElement.checked;
  const checkedLowerElement = lowerCaseElement.checked;
  const checkedSpecialElement = specialElement.checked;

  const tempArray = [];

  if (pwdLengthNumber < 4 || pwdLengthNumber > 256) {
    alert("Please check your number");
  } else {
    for (let i = 1; i <= 3; i++) {
      const pwdForArray = generateNewPassword(
        checkedNumbersElement,
        checkedUpperElement,
        checkedLowerElement,
        checkedSpecialElement,
        pwdLengthNumber
      );
      tempArray.push(pwdForArray);
      console.log(pwdForArray);
      const lastSubmit = tempArray[tempArray.length - 1];

      const liCreate = document.createElement("li");
      liCreate.style.maxWidth = "80%";
      liCreate.textContent = lastSubmit;
      resultSection.appendChild(liCreate);
    }

    // TODO: render only newest elements
  }
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
  let newPassword = "";

  const countCheckboxes = getNumber + getUpperCase + getLowerCase + getSpecial;

  const checkboxArray = [
    { getNumber },
    { getUpperCase },
    { getLowerCase },
    { getSpecial },
  ];

  const filteredCheckboxArray = checkboxArray.filter(
    (checkbox) => Object.values(checkbox)[0]
  );

  // FIXME: site stops working when no checkbox is selected

  if (countCheckboxes === 0) {
    alert("Please select a checkbox");
  } else if (countCheckboxes > 0) {
    for (let i = 0; i < pwdLengthNumber; i = i + countCheckboxes) {
      filteredCheckboxArray.forEach((item) => {
        const functionName = Object.keys(item)[0];
        newPassword = newPassword + getRandomFunctions[functionName]();
      });
    }
  }

  const finalPassword = newPassword.slice(0, pwdLengthNumber);
  console.log(finalPassword);
  return finalPassword;
}
