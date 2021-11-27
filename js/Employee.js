class Employee
{
    firstName;
    lastName;
    static taxRate = 0.25;

    constructor(fn,ln)
    {
        this.firstName=fn;
        this.lastName=ln;
    }


    calGrossPay(){
        
    }

     calTaxes()
     {

       return Employee.taxRate * this.calGrossPay();
     }

     calNetSalary()
     {
       return  this.calGrossPay() - this.calTaxes()
     }

    
}

module.exports = Employee;