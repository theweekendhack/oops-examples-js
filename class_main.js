

const main = (()=>{


    const Rectangle = require("./Rec.js");

    const r1 = new Rectangle();
    const r2 = new Rectangle(3);
    const r3 = new Rectangle(4,20);


    console.log(`The area for r1 is ${r1.calArea()}`);
    console.log(`The area for r2 is ${r2.calArea()}`);
    console.log(`The area for r3 is ${r3.calArea()}`);



})();


