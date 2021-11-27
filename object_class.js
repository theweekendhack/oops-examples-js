

const main = (()=>{


    const Movie = require("./Movie.js");



    //Create a 1st movie
    const movie1 = new Movie("Titanic","Love Movie",200,"PG-13");
    movie1.displayMovieInformation();



    //CreatE a 2nd movie
    const movie2 = new Movie("Matrix","Boss Movie",120,"R");
    movie2.displayMovieInformation();


    //Create a 3rd movie
    const movie3 = new Movie("Spiderman","Superhero Movie",130,"PG-13");
    console.log("\n\n")
    console.log(movie3.title);
    movie3.title="Professor X";
    movie3.displayMovieInformation();


    movie1.displayMovieInformation();

  /*

  //IF we didn't create a class and we wanted to create multiiple movie objects
  //using the object literal syntax, we would have had to create, multiple
  //object literals, thus repeating all the properties and methodss again and again
    const movie = {

        title : "Matrix 4",
        description :"Sci-fi movie",
        rating : 'R',
        duration : 180,

        displayAllMovieInfo()
        {

        }

    }

  


    const movie2= {

        title : "Titanic",
        description :"Romatnic",
        rating : 'PG-13',
        duration : 300,

        displayAllMovieInfo()
        {

        }
        

    }

    const movie3 = {

        title : "Avengers",
        description :"Action",
        rating : 'PG-13',
        duration : 180,

        displayAllMovieInfo()
        {

        }

    }*/

    




})();


