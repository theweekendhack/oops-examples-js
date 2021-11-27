

const HourlyEmployee = require("./HourlyEmployee.js");
const CommissionEmployee = require("./HourlyEmployee.js");

const main = (()=>{


    const h1 = new HourlyEmployee("Jon","Snow",100,160);


    const h2 = new CommissionEmployee("Jon","Snow",10000000,2000);

    console.log(h1.calGrossPay());
    console.log(h1.calTaxes());
    console.log(h1.calNetSalary());

    console.log("\n\n");
    
    console.log(h2.calGrossPay());
    console.log(h2.calTaxes());
    console.log(h2.calNetSalary());





})();