class Person{
    name : string;
    address : string;
    constructor(name : string , address: string){
        this.name = name;
        this.address = address;
    }
}
class Employee extends Person{
    salary : number;
    constructor(name : string, address: string, salary: number){
        super(name, address);
        this.salary = salary;
    }
}
class Doctor extends Person{
    salary : number;
    constructor(name : string, address: string, salary: number){
        super(name, address);
        this.salary = salary;
    }
}
let him = new Employee("Him", "bor", 1200);
let yon = new Employee("yon", "Borea smos sna", 1260);
let rady = new Doctor("Rady", "borea smos sna", 1200)
console.log(yon);
console.log(him);
console.log(rady);


