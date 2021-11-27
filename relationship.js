
const Student = require("./Student.js");
const Address = require("./Address.js");



const main = (()=>{



    const s1 = new Student("Bruce","Wayne", new Address("Spiderman lane","","Avengers City","11111","Japan"));



    console.log(`Student Name : ${s1.getFullName()}`);
    console.log(`Street Name : ${s1.address.street1}`);
    console.log(`City : ${s1.address.city}`);

})();