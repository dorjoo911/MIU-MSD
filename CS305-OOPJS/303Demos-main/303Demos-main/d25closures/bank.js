"use strict";

/*
21.	Create bank object, bank, with methods:
a.	debit(id, amount) , adds negative amount to customer transaction list, but only if the amount is greater than the current balance.
b.	credit(id, amount), adds positive amount to customer transaction list
c.	getBalance(id) returns current balance of that customer.  The balance should be computed as the sum of all recorded transaction amounts.
d/  saveTransaction(id, amount) saves this transaction amount to the customerTransactions list for this customer
e.	getBankBalance:  returns sum of all customer balances
The bank object should have a transactionsDB property, which will be an array of objects containing all of the customer objects.
  Customer objects will have properties customerId and customerTransactions, e.g., 
{customerId: 1234, customerTransactions: [10, 50, -40] } would be one element of the array.
Revealing Module pattern:  https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch09s03.html 
*/

/**
 * @returns {object} bank with closure over the transactionsDB
 */
function makeBank() {
    const transactionsDB = [
        { customerId: 1, customerTransactions: [10, 50, -40] },
        { customerId: 2, customerTransactions: [10, 10, -10] },
        { customerId: 3, customerTransactions: [5, -5, 55] }];

    const bank = {
        //transactionsDB: [],
    };
    // bank.transactionsDB = [
    //     { customerId: 1, customerTransactions: [10, 50, -40] },
    //     { customerId: 2, customerTransactions: [10, 10, -10] },
    //     { customerId: 3, customerTransactions: [5, -5, 55] }];

    bank.debit = function (id, amount) {
        /* make sure current balance is > amount */
        const balance = this.getBalance(id);
        if (balance < amount) {
            console.log("insufficient balance, debit not accepted ... ");
        } else {
            this.saveTransaction(id, amount);
        }
    };

    bank.credit = function (id, amount) {
        this.saveTransaction(id, amount);
    };

    bank.getBalance = function (id) {
        const customer = transactionsDB.find(customer => customer.customerId === id);
        let balance = 0;
        for (const trans of customer.customerTransactions) {
            balance += trans;
        }
        return balance;
    };

    bank.saveTransaction = function (id, amount) {
        const customer = transactionsDB.find(customer => customer.customerId === id);
        customer.customerTransactions.push(amount);

    };

    /**
     * @returns {number}  returns sum of all balances
     */
    bank.bankBalance = function () {
        let total = 0;
        for (const trans of transactionsDB) {
            total += this.getBalance(trans.customerId);
        }
        return total;
    };

    return bank;
}

const bank = makeBank();

console.log("total balance should be 85: ", bank.bankBalance());
bank.credit(1, 20);
bank.debit(1, 1000);
console.log("total should now be 105: ", bank.bankBalance());
