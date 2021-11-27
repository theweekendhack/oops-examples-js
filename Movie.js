
//This your blue print
class Movie
{

    //properties
    title;
    description;
    duration;
    rating;


    //constructor

    //This is used to create AND initialize your object with data
    constructor(t,des,dur,r)
    {
        this.title = t;
        this.description = des;
        this.duration = dur;
        this.rating = r;
    }



    //methods
    displayMovieInformation()
    {

        console.log(`\n\n*****MOVIE DETAILS**********`);

        console.log(`Movie Name : ${this.title}`);
        console.log(`Movie Duration : ${this.duration}`);
        console.log(`Movie Rate : ${this.rating}`);

    }


    displayWelcomeMovieGreeting()
    {
        console.log(`Hello, just testing `);

    }

   

}


module.exports = Movie;