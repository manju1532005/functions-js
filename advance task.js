//1

class BankAccount {
  
    #balance;
  
    constructor(initialBalance = 0) {
      if (initialBalance < 0) {
        throw new Error('Initial balance cannot be negative');
      }
      this.#balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount <= 0) {
        throw new Error('Deposit amount must be positive');
      }
      this.#balance += amount;
    }
  
    withdraw(amount) {
      if (amount <= 0) {
        throw new Error('Withdrawal amount must be positive');
      }
      if (amount > this.#balance) {
        throw new Error('Insufficient funds');
      }
      this.#balance -= amount;
    }
  

    getBalance() {
      return this.#balance;
    }
  }
  
  const account = new BankAccount(100); 

console.log(account.getBalance()); 

account.deposit(50);  
console.log(account.getBalance()); 

account.withdraw(30); 
console.log(account.getBalance()); 


try {
  account.withdraw(200); 
} catch (error) {
  console.error(error.message);  
}



//2

function greet(name) {
    try {
      if (name === "") {
        throw new Error(" cannot be empty");
      }
      console.log(`Hello, ${name}!`);
    } catch (error) {
      console.log(error.message); 
    }
  }
  greet("manju"); 
greet("");      
