function successGetNowPlaying(data) {
	var movieNowPlaying = JSON.parse(data);
	var htmlNowPlaying = '<section id ="nowPlaying"><h1>Dans vos salles</h1>';
	for (var i = movieNowPlaying.length - 1; i >= 0; i--) {
		htmlNowPlaying = htmlNowPlaying.concat(createElement(movieNowPlaying[i]));
	};
	htmlNowPlaying = htmlNowPlaying.concat('</section>');
	$("#mainWrapper").append(htmlNowPlaying);
};

function successGetPopular(data)
{
	var moviePopular = JSON.parse(data);
	var htmlPopular = '<section id ="popular"><h1>Populaire</h1>';
	for (var i = moviePopular.length - 1; i >= 0; i--) {
		htmlPopular = htmlPopular.concat(createElement(moviePopular[i]));
	};
	htmlPopular = htmlPopular.concat('</section>');
	$("#mainWrapper").append(htmlPopular);
};

function successTopRated(data)
{
	var movieTopRated = JSON.parse(data);
	var htmlTopRated = '<section id ="topRated"><h1>Meilleures notes</h1>';
	for (var i = movieTopRated.length - 1; i >= 0; i--) {
		htmlTopRated = htmlTopRated.concat(createElement(movieTopRated[i]));
	};
	htmlTopRated = htmlTopRated.concat('</section>');
	$("#mainWrapper").append(htmlTopRated);
};

function successResearch(data)
{
	var movieSearch = JSON.parse(data);
	var htmlSearch = '<section id ="research"><h1>Recherche</h1>';
	for (var i = movieSearch.length - 1; i >= 0; i--) {
		htmlSearch = htmlSearch.concat(createElement(movieSearch[i]));
	};
	htmlSearch = htmlSearch.concat('</section>');
	$("#researchWrapper").html(htmlSearch);
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

};