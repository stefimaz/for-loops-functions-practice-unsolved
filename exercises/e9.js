
// EXERCISE 9
// Return an array of bank accounts with balance over $100
// Array example: bankAccounts in /data/data.js
// getClientsWithBalanceOverOneHundred(array) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithBalanceOverOneHundred(array) {
  // Your code goes here...
  let accountOver = [];

  for (let i = 0; i < array.length; i++) {
    const currentAccount = array[i];
    if (currentAccount.balance > 100) {
      accountOver.push(currentAccount);
    }
  }
    return accountOver;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-9"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
