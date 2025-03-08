class Employee {
  constructor(name, id, salary) {
    this.name = name;
    this.id = id;
    this.salary = salary;
  }
 
  calculate_bonus() {
    return this.salary * 0.1;
  }
}
 
class Manager extends Employee{
  calculate_bonus() {
    return this.salary * 0.2;
  }
}
 
class Developer extends Employee {
  calculate_bonus() {
    return this.salary * 0.15;
  }
}
 
let manager = new Manager("ahanaf", 101, 10000);
let developer = new Developer("tahmid", 102, 20000);
 
console.log(manager.calculate_bonus()); 
console.log(developer.calculate_bonus());