var pageContent = '';
function successGetNowPlaying(data) {
	var movieNowPlaying = JSON.parse(data);
	var htmlNowPlaying = "";
	for (var i = movieNowPlaying.length - 1; i >= 0; i--) {
		htmlNowPlaying = htmlNowPlaying.concat(createElement(movieNowPlaying[i]));
	};
	pageContent = pageContent.concat(htmlNowPlaying);
};

function errorCB(data) {
	console.log("Error callback: " + data);
};

theMovieDb.movies.getNowPlaying({}, successGetNowPlaying, errorCB);

$("#mainWrapper").innerHtml = pageContent;