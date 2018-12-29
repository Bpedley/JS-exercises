"use strict";

/*
You have deposited a specific amount of money into your bank account.
Each year your balance increases at the same growth rate. With the assumption
that you don't make any additional deposits, find out how long it would take
for your balance to pass a specific threshold. Of course you don't want to wait
too long, so you know that the answer is not greater than 6.
*/

function depositProfit(deposit, rate, threshold) {
  let years = 0;
  while (deposit < threshold) {
    deposit += deposit * rate / 100;
    years++;
  }
  return years;
}


console.log(depositProfit(100, 20, 170)); // 3
console.log(depositProfit(100, 1, 101));  // 1
console.log(depositProfit(1, 100, 64));   // 6
