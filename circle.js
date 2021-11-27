const circle = {

    //property
    radius : 0,



    //methods
    calArea()
    {
        return  Math.PI * (this.radius ** 2);
    },

    calCircumference(){

        return  2 * this.radius * Math.PI;
    }


}

module.exports = circle;