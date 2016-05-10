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

function errorCB(data) {
	console.log("Error callback: " + data);
};

function initPage()
{
	theMovieDb.movies.getNowPlaying({}, successGetNowPlaying, errorCB);
	theMovieDb.movies.getPopular({}, successGetPopular, errorCB)
};

$(document).ready()
{
	initPage();
};