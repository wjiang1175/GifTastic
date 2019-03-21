$(document).ready(function () {

    var movies = ["avengers", "captain+marvel", "spiderman", "doctor+strange", "black+panther"];



    $("button").on("click", function () {
        var person = $(this).attr("data-person");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            person + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                var results = response.data;



                for (var i = 0; i < 10; i++) {

                    var gifDiv = $("<div>");
                    gifDiv.addClass("gif-img")
                    var personImage = $("<img>");
                    var stillSrc = response.data[i].images.fixed_height_still.url;
                    personImage.attr("src", stillSrc);
                    personImage.attr("data-still", stillSrc);

                    var rating = results[i].rating;
                    var p = $("<p>").text("Rating: " + rating);
                    personImage.attr("data-still", response.data[i].images.fixed_height_still.url);
                    gifDiv.append(p)
                    gifDiv.append(personImage);
                    $("#gifs-appear-here").prepend(gifDiv);
                }
                $(document).on("click", ".gif-img", function () {
     
                    var state = $(this).attr("data-state");
                    var animateSrc = $(this).attr("data-animate");
                    var stillSrc = $(this).attr("data-still");
            
                    if ("data-still") {
                        alert("hi");
                        $(this).attr("src", animateSrc);
                        $(this).attr("data-state", "animate");
                    } else if (state === "animate") {
                        $(this).attr("src", stillSrc);
                        $(this).attr("data-state", "still");
            
                    }
                });
   
        
        
    
        });

    });





//     gifDiv.on("click", function () {
//         {
//             alert("hi");
//             var animateSrc = response.data[i].images.fixed_height.url;
//             personImage.attr("data-animate", animateSrc);
//             personImage.attr("data-animate", response.data[i].images.fixed_height_animate.url);

//         }

// });




    // function movieSearch(movies) {
    //     for (i = 0; i < movies.length; i++) {
    //         $("<button>").addClass("btn").attr("data-name".text(movies[i]).appendTo(movieBtn).click(addMovie && gifs))
    //     }
    // }


    // function addMovie() {
    //     event.preventDefault();
    //     var movieTitle = movieInput.val().trim();
    //     if (movieTitle.length > 0 && !movies.includes(movieTitle)) {
    //         movieInput.val('');
    //         movieBtn.empty();
    //         movies.push(movieTitle);
    //         movieSearch(movies);
    //     }
    // }

    // function gifs(){
    //     var APIKey = "AbJKeBPJ7rkFYp6j4bNTbMbmxxQyboub"
    //     var movieName = $(this).attr("data-name")
    //     queryUrl = 'https://api.giphy.com/v1/gifs/search?api_key=' + APIKey + '&q=' + movieName + ' movie&limit=10&offset=0&rating=R&lang=en';

    //     $.get(queryUrl, function(response) {
    //         var movieResult = response.data;
    //         var card = $("<div>")
    //         for(i = 0; i < results.length; i++) {
    //             const gifDiv = $('<div>').addClass('gifDiv');
    //             const gifRating = $('<p>').addClass('gifP').text('Rating: ' + results[i].rating.toUpperCase());
    //             const faveP = $('<p class="faveStar"> Favorite</p>');

    //             const HTMLToSearchFor = results[i].images.original_still.url;
    //             const faveMatch = faveListDiv.find('img[data-still="' + HTMLToSearchFor + '"]');
    //             let faveStar;

    //             if(faveMatch.length > 0) {
    //                 faveStar = $('<i>').addClass('fas fa-star').click(giftastic.fave);
    //             } else {
    //                 faveStar = $('<i>').addClass('far fa-star').click(giftastic.fave);
    //             }

    //     })
    // }








    // function movieSearch(movie) {
    //     movie = $(this).attr("movieName");
    //     console.log(movie);
    //     var url;
    //     var queryUrl = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    //     $.ajax({
    //         url: queryUrl,
    //         method: "GET"
    //     }).then(function (response) {
    //         console.log(response);
    //         for (var i = 0; i < movies.length; i++) {
    //             var card = $("<div>");
    //             card.addClass("card");
    //             var images = $("img");

    //             var stillSrc = response.data[i].images.fixed_height_still.url;
    //             var animateSrc = response.data[i].images.fixed_height.url;

    //             image.attr("src", stillSrc);
    //             image.attr("data-state", "still");
    //             image.attr("data-animate", animateSrc);
    //             image.attr("data-still", stillSrc);

    //             card.append(image);

    //         }


    //     })
    // }
    // $(document).on("click", ".gif", function () {

    //     var state = $(this).attr("data-state");
    //     var animateSrc = $(this).attr("data-animate");
    //     var stillSrc = $(this).attr("data-still");

    //     if (state === "still") {
    //         $(this).attr("src", animateSrc);
    //         $(this).attr("data-state", "animate");
    //     } else if (state === "animate") {
    //         $(this).attr("src", stillSrc);
    //         $(this).attr("data-state", "still");

    //     }

    // });

    // selectMovie.on("click", function (event) {
    //     event.preventDefault();
    // });
    // $(document).on("click", ".selectMovie", movieSearch);

});