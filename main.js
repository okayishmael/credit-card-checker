// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:

//Convert Credit Card string number in an array
function convertCreditCard(creditCardString) {
  let newArrayNumber = [];
  for (let i = 0; i < creditCardString.length; i++) {
    newArrayNumber.push(Number(creditCardString[i]));
  }
  //console.log(newArrayNumber);
  return newArrayNumber;
}

function validateCred(card) {
  let sum = 0;
  let shouldDouble = false;

  // Iterate over the array from the right to the left
  for (let i = card.length - 1; i >= 0; i--) {
    let currentDigit = card[i];

    // Double every second digit, starting from the right
    if (shouldDouble) {
      currentDigit *= 2;

      // If doubling results in a number greater than 9, subtract 9

      if (currentDigit > 9) {
        currentDigit -= 9;
      }
    }
    // Add the current digit (or modified value) to the sum
    sum += currentDigit;

    // Toggle the 'shouldDouble' flag for the next iteration
    shouldDouble = !shouldDouble;
  }
  // Step 2: Return true if the sum is divisible by 10
  return sum % 10 === 0;
}

// Function to find invalid cards from a nested array of card numbers
function findInvalidCards(cards) {
  let invalidCardsArr = [];

  //loop through the cards array and check for invalid card and add them to the invalid cards array
  for (let card of cards) {
    if (!validateCred(card)) {
      invalidCardsArr.push(card);
    }
  }

  return invalidCardsArr;
}

console.log(findInvalidCards(batch));

//==========================

function idInvalidCardCompanies(invalidcards) {
  invalidcards = findInvalidCards(invalidcards);
  const invalidCardCompanies = [];

  // Loop through invalidcards and list of card companies they belong to.
  for (let i = 0; i <= invalidcards.length; i++) {
    if (invalidcards[i]) {
      if (invalidcards[i][0] === 3) {
        if (!invalidCardCompanies.includes("Amex")) {
          invalidCardCompanies.push("Amex");
        }
      } else if (invalidcards[i][0] === 4) {
        if (!invalidCardCompanies.includes("Visa")) {
          invalidCardCompanies.push("Visa");
        }
      } else if (invalidcards[i][0] === 5) {
        if (!invalidCardCompanies.includes("MasterCard")) {
          invalidCardCompanies.push("MasterCard");
        }
      } else if (invalidcards[i][0] === 6) {
        if (!invalidCardCompanies.includes("Discover")) {
          invalidCardCompanies.push("Discover");
        }
      } else {
        return `Company not found.`;
      }
    }
  }
  return invalidCardCompanies;
}

// Print a valid, an invalid and a mystery card
console.log(validateCred(valid3));
console.log(validateCred(invalid3));
console.log(validateCred(mystery4));

// Pint invalid Cards Companies
console.log(idInvalidCardCompanies(batch));

// Print true or false if valid or not using srting.
console.log(validateCred(convertCreditCard("4532444326223194")));
