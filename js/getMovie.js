function successGetNowPlaying(data) {
	var movieNowPlaying = JSON.parse(data);
	var htmlNowPlaying = '';
	for (var i = movieNowPlaying.results.length - 1; i >= 0; i--) {
		htmlNowPlaying = htmlNowPlaying.concat(createElement(movieNowPlaying.results[i],'nowplaying'));
	};
	$("#nowPlaying .listMovies").append(htmlNowPlaying);
};

function successGetPopular(data)
{
	var moviePopular = JSON.parse(data);
	var htmlPopular = '';
	for (var i = moviePopular.results.length - 1; i >= 0; i--) {
		htmlPopular = htmlPopular.concat(createElement(moviePopular.results[i],'popular'));
	};
	$("#popular .listMovies").append(htmlPopular);
};

function successTopRated(data)
{
	var movieTopRated = JSON.parse(data);
	var htmlTopRated = '';
	for (var i = movieTopRated.results.length - 1; i >= 0; i--) {
		htmlTopRated = htmlTopRated.concat(createElement(movieTopRated.results[i],'toprated'));
	};
	$("#topRated .listMovies").append(htmlTopRated);
};

function successResearch(data)
{
	var movieSearch = JSON.parse(data);
	var htmlSearch = '';
	for (var i = movieSearch.results.length - 1; i >= 0; i--) {
		htmlSearch = htmlSearch.concat(createElement(movieSearch.results[i],'research'));
	};
	$("#researchMovie .listMovies").html(htmlSearch);
};

function successGetById(data, category)
{
	displayDetails(data, category);
};

function errorCB(data) {
	console.log("Error callback: " + data);
};

function initPage()
{
	theMovieDb.movies.getNowPlaying({}, successGetNowPlaying, errorCB);
	theMovieDb.movies.getPopular({}, successGetPopular, errorCB);
	theMovieDb.movies.getTopRated({}, successTopRated, errorCB);
};

$(document).ready()
{
	initPage();

	$("#research").on('input',function(e){
		theMovieDb.search.getMovie({"query":$("#research").val()}, successResearch, errorCB)
	});



	/*$(".globalMovieWrapper").on('mouseenter',function () {

        alert('test');
        $.ajax({
            url: 'http://api.themoviedb.org/3/movie/'+$(this).attr('data-id'),
            type: 'get',
            dataType: 'json',
            data: {api_key: "58f8fe741b03b0ae4c9a2ed080e94041"},
            success: function(data)
            {
                console.debug(data);
                var category = $(this).attr('data-category');
                successGetById(data, category);
            },
            error: function(x1, x2, x3)
            {
                console.debug(x1);
            }
        });
	}).on('mouseleave',function ()
	{
		//$this.find("span").hide();
	});*/
};

function getDetailsMovie(id, category)
{
    $.ajax({
        url: 'http://api.themoviedb.org/3/movie/'+id,
        type: 'get',
        dataType: 'json',
        data: {api_key: "58f8fe741b03b0ae4c9a2ed080e94041"},
        success: function(data)
        {
            console.debug(data);
            displayDetails(data, category);
        },
        error: function(x1, x2, x3)
        {
            console.debug(x1);
        }
    });
}

