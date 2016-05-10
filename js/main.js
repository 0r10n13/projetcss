function createElement(movie)
{
    var html = "";
    html = '<div class="globalMovieWrapper">'+
            '<div class="globalMovie">'+
                '<img src="http://image.tmdb.org/t/p/w342'+movie.poster_path+'" alt="picture">'+
            '</div>'+
            '</div>';

    return html;
}

function displayDetails()
{

}