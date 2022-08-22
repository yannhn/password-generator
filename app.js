// Characters
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

const specialCharacters = [".", "\\", ":", ";", "/"];

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
