const Employee = require("./Employee.js");
class CommissionEmployee extends Employee
{
    
    
    static commissionRate = 0.05;
    totalSales;
    fixedSalary;

    constructor(fn,ln,totalSales,fixedSalary)
    {
        super(fn,ln);
        this.totalSales=totalSales;
        this.fixedSalary = fixedSalary;
    }


    calGrossPay()

     {
        return this.fixedSalary + (CommissionEmployee.commissionRate * this.totalSales);
     }

     

    
}

module.exports = CommissionEmployee;