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


