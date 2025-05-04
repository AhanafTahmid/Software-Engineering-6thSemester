class BankAccount{
    #account_number;
    #account_holder_name;
    #balance;
    constructor( account_number, account_holder_name, balance){
        this.#account_number = account_number;
        this.#account_holder_name = account_holder_name;
        this.#balance = balance;
    }
    
    get account_holder_name() {
      return this.#account_holder_name;
    }

    get account_number() {
      return this.#account_number;
    }

    get balance() {
        return this.#balance;
      }
      
      set account_holder_name(name) {
        this.#account_holder_name = name;
      }

      set account_number(number) {
        this.#account_number = number;
      }

      set balance(bal) {
        this.#balance = bal;
      }
 
      deposit(amount) {
        this.#balance += amount;
        return this.#balance;
      }
      withdraw(amount) {
            if( this.#balance - amount > 0 )
                this.#balance -= amount;
                return this.#balance;
    }
}
 
let o = new BankAccount(1, "Ahanaf", 0);
console.log(o.deposit(100)); 
console.log(o.withdraw(11));