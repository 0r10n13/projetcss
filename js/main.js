function createElement(movie, category)
{
    var html = "";
    html = '<div class="globalMovieWrapper" data-id="'+movie.id+'" data-category="'+category+'">'+
            '<div class="globalMovie">'+
                '<img src="http://image.tmdb.org/t/p/w342'+movie.poster_path+'" alt="picture">'+
            '</div>'+
            '</div>';

    return html;
}


function displayDetails(movie, category)
{
    var html = "";

    $("#"+category+"ItemImg").attr('src', 'http://image.tmdb.org/t/p/w342'+movie.poster_path);
    $("#"+category+"ItemTitle").textContent(movie.title);
    $("#"+category+"ItemNote").textContent(movie.vote_average);
    $("#"+category+"ItemDescription").textContent(movie.overview);
    $("#"+category+"ItemGenre").textContent(movie.genre);
    $("#"+category+"ItemDate").textContent(movie.release_date);

    $("")
}