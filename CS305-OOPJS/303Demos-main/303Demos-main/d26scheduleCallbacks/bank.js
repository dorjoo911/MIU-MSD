"use strict";

const bank = {    transactionsDB: [],};
bank.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [5, -5, 55] }];

bank.getBalance = function (id) {
    const customer = bank.transactionsDB.find(customer => customer.customerId === id);
    let balance = 0;
    for (const trans of customer.customerTransactions) {    balance += trans;   }
    return balance;  };

 bank.bankBalance = function () {
let total = 0;
for (const trans of this.transactionsDB) {
total += this.getBalance(trans.customerId);
}
return total;
}; 