// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...
  let allWithdrawals = [];

  for (let i = 0; i < array.length; i++) {
    if (!array[i].withdrawals) {
      array[i].withdrawals = [0];
    }
  }
  for (let j= 0; j< array.length; j++) {
    let accounts = array[j].withdrawals;

    if (accounts[0] > 0) {
      let sum = 0;
      for (let num of accounts) {
        sum += num;
      }
      allWithdrawals.push(sum);
    } else {
      let sum = 0;
      allWithdrawals.push(sum);
    }
  }

  return allWithdrawals;
}

 
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
