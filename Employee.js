class Employee 
{

    firstName; // instance variable
    lastName; //instance variable
    static taxRate=0.25; //static variable
    

    constructor(fn,ln)
    {
        this.firstName=fn;
        this.lastName=ln;
    }


    getFullName()
    {
        return `${this.firstName} ${this.lastName}`;
    }
}



const e1= new Employee("Jon","Snow");
const e2= new Employee("Keisha","Wharton");
const e3= new Employee("Ayra","Stark");



//You access static variables via the class Name 
console.log(Employee.taxRate);

//You access instance variables via the reference variable
console.log(e1.firstName);