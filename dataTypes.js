

//Primitive Data Types
let intA = 15;
let intB = 10;


intA = intB;

//console.log(intA);
//console.log(intB);



const c1 = {

    radius : 7
};


const c2 = {
    radius : 10
}


//c1 = c2;  // if you un-comment this line it will through an array becausee you trying to override the value of c1

c1.radius =25;
c2.radius = 40;

console.log(c1.radius);
console.log(c2.radius);