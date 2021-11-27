class Student 
{

    firstName;
    lastName;
    address; // this property references an address object(this models an has-a relationship)
    

    constructor(firstName,lastName,address)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.address = address;
    }


    getFullName()
    {
        return `${this.firstName} ${this.lastName}`;
    }

}

module.exports = Student;