function createElement(movie, category)
{
    var html = "";
    html = '<div class="globalMovieWrapper" data-id="'+movie.id+'" data-category="'+category+'" ' +
        'onmouseover="getDetailsMovie('+movie.id+', \''+category+'\')" onmouseout="hideDetails(\''+category+'\')">'+
            '<div class="globalMovie">'+
                '<img src="http://image.tmdb.org/t/p/w342'+movie.poster_path+'" alt="picture">'+
            '</div>'+
            '</div>';

    return html;
}


function displayDetails(movie, category)
{
    var html = "";
    console.debug(category);
    $("#"+category+"ItemImg").attr('src', 'http://image.tmdb.org/t/p/w342'+movie.poster_path);
    $("#"+category+"ItemTitle").text(movie.title);
    $("#"+category+"ItemNote").text(movie.vote_average);
    $("#"+category+"ItemDescription").text(movie.overview);
    $("#"+category+"ItemGenre").text(movie.genre);
    $("#"+category+"ItemDate").text(movie.release_date);
}

$(document).ready(function(){
    /*var movie = Array();
    movie.poster_path = "/dkMD5qlogeRMiEixC4YNPUvax2T.jpg";
    movie.title = "Titre";
    movie.vote_average = "4,5";
    movie.overview = "Description";
    movie.genre = "Test";
    movie.release_date = "today";

    displayDetails(movie, 'popular');*/

});

