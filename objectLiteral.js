



//firstName, lastName, age, gender, isEmployed


/*
An Example of An Object Literal
*/
const person = {

        //properties

        firstName: "Jon",
        lastName: "Snow",
        middlename:"King Of The North",
        yearOfBirth:1989,
        gender :'M',
        isEmployed:true,
        
     

        //methods (Is a function attached to an object)
        //methods are used to model behavior for an object


        doARandomThing()
        {
            console.log(`This is an Objet Literal`);
        },

        getFullName(){
 
            //full name is a local variable (function scope)
            const fullName = `${this.firstName} ${this.middlename} ${this.lastName}`;

            return fullName;
        
        },

        calAge(currentYear)
        {
            return currentYear - this.yearOfBirth;
        }


}





//Accessing a properties in an object
console.log(person.firstName);


//Call or Invoke a method from inside object=
person.doARandomThing();

//Changing the value of a property defined inside an object
console.log(person.isEmployed);
person.isEmployed=false;
console.log(person.isEmployed);



//Printing out the person full name (without the fullName Method)
console.log(`${person.firstName} ${person.middlename} ${person.lastName}`);

//Printing out the person full name

console.log(person.getFullName());



console.log(`Person age is ${person.calAge(2000)}`);

const printInfo = (p)=>{


    console.log(`Person Full Name : ${p.getFullName()}`);

    console.log(`Perosn Year : ${p.yearOfBirth}`);
}


//Passing an object as an argument to a regular function
printInfo(person);



