
/*
    Write a Program that calculates the area and perimeter of a rectangle
    USING OBJECTs

*/



const main = (()=>{


    //import modules
    const prompt = require("prompt-sync")();
    const rectangle = require("./rectangle.js");
    const circle = require("./circle.js");
    const calSum = require("./functionModule.js");




  rectangle.length = parseInt(prompt("Please enter the length of a rectangle : "));
  rectangle.width = parseInt(prompt("Please enter the width of a rectangle : "));


   circle.radius = parseFloat(prompt("\n\nPlease enter the raidus of the circle : "));


  console.log(`\nThe area of the rectangle  ${rectangle.calArea()}`);
  console.log(`The perimeter of the  rectangle  ${rectangle.calPerimeter()} `);


  console.log(`\n\nThe area of the circle  ${circle.calArea().toFixed(2)}`);
  console.log(`The circumference of the circle  ${circle.calCircumference().toFixed(2)}`);


  console.log(`\nThe sum of two numbers ${calSum(2,4)}`);
  







})();