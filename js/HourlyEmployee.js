
const Employee = require("./Employee.js");
class HourlyEmployee extends Employee
{
    
    
    hourlyRate;
    hoursWorked;

    constructor(fn,ln,hr,hw)
    {
        super(fn,ln);
        this.hourlyRate=hr;
        this.hoursWorked=hw
    }


     calGrossPay()
     {
       return this.hourlyRate*this.hoursWorked;
     }

     

    
}

module.exports = HourlyEmployee;