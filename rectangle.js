 //Object Literal
 const rectangle = {


    //properties
    length:0,
    width:0,


    //methods
    calArea()
    {

        return this.length * this.width;

    },

    calPerimeter()
    {

        return 2 * (this.length + this.width);
    },


    method()
    {
        
    }


}

module.exports = rectangle;