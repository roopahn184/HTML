const Account = require("./Account")
class CA extends Account{
    constructor(id, name, Balance){
        super(id, name, Balance);
        this.acc_Balance = Balance
    }
    balance_Account (Balance){
        this.acc_Balance = this.acc_Balance + Balance
    }
}
let a1 = new CA(102,"divya", 500);
a1.current_Account()
console.log(a1);

a1.balance_Account(1000);
console.log(a1);