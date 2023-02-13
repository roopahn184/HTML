class Account {
    constructor(id, name){
        this.acc_Id = id;
        this.acc_Name = name;
    }
    open_Account() {
        console.log("account opened succesfully");
    }
    current_Account() {
        console.log("current account opened succesfully");
    }
}
module.exports = Account