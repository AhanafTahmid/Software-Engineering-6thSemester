// //1. S - Single Responsibility Principle
// class ValidateUser {
//     constructor(name, email) {
//       this.name = name;
//       this.email = email;
//     }
//   }
//   class CreateUser{
//     create(user) {
//       console.log(`Saved ${user.name}`);
//   } }


//2. O - Open/Closed Principle (OCP)
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    speak() {
        //...
    }
}

class Baby extends Human {
    speak() {
        return "Goo goo ga ga!";
    }
}

class Teenager extends Human {
    speak() {
        return "Whatever...";
    }
}


//3. L - Liskov Substitution Principle (LSP)
//Subclasses is substitutable Here
// class Bird {
//     layegg() {
//         console.log("I can lay eggs");
//     }
// }
// class FlyingBird {
//     fly() {
//         console.log("I can fly");
//     }
// }
// class Eagle extends FlyingBird {
// }
// class Penguine extends Bird {
// }
// const p = new Penguine();
// p.layegg();


//4. I - Interface Segregation Principle (ISP)

//Separate interfaces for distinct functionalities.

// class Eater {
//     eat() {
//         //...
//     }
// }

// class Sleeper {
//     sleep() {
//        //...
//     }
// }

// class BabyEater extends Eater {
//     eat() {
//         console.log("Drinks milk");
//     }
// }

// class TeenagerEater extends Eater {
//     eat() {
//         console.log("Eats fast food");
//     }
// }
// const t = new TeenagerEater();
// t.eat();



//5. D - Dependency Inversion Principle (DIP)

//the modules that contain strategic decisions and high-level directives, 
// should not depend on low-level modules

// class MySqlConnection {
//     connect() { }
// }

// class PasswordReminder {
//     constructor() {
//         this.dbConnection = new MySqlConnection();
//     }
// }

// class MySqlConnection {
//     connect() { }
// }
// class PostgreSqlConnection {
//     connect() { }
// }

// class PasswordReminder {
//     constructor(connection) {
//         this.dbConnection = connection
//     }
// }


//DRY Principle

//Avoiding code duplication
  
// Not DRY
let add = (a, b) => {
    console.log(a + b);
};

let subtract = (a, b) => {
    console.log(a - b);
};

// DRY
let calculateNumbers = (a, b, operator) => {
if (operator === '+') {
    console.log(a + b);
} else if (operator === '-') {
    console.log(a - b);
}
}

calculateNumbers(5, 3, '+');
calculateNumbers(5, 3, '-');
  