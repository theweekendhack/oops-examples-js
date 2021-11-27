class Rectangle
{

    length;
    width;


    constructor(l=0,w=0)
    {
        this.length = l;
        this.width =w;
    }

     //methods
     calArea()
     {
 
         return this.length * this.width;
 
     }
 
     calPerimeter()
     {
 
         return 2 * (this.length + this.width);
     }
 

}


module.exports = Rectangle;;