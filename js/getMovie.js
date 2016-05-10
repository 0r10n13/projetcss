function successGetNowPlaying(data) {
	var movieNowPlaying = JSON.parse(data);
	var htmlNowPlaying = '';
	for (var i = movieNowPlaying.results.length - 1; i >= 0; i--) {
		htmlNowPlaying = htmlNowPlaying.concat(createElement(movieNowPlaying.results[i],'nowplaying'));
	};
	$("#nowPlaying").append(htmlNowPlaying);
};

function successGetPopular(data)
{
	var moviePopular = JSON.parse(data);
	var htmlPopular = '';
	for (var i = moviePopular.results.length - 1; i >= 0; i--) {
		htmlPopular = htmlPopular.concat(createElement(moviePopular.results[i],'popular'));
	};
	$("#popular").append(htmlPopular);
};

function successTopRated(data)
{
	var movieTopRated = JSON.parse(data);
	var htmlTopRated = '';
	for (var i = movieTopRated.results.length - 1; i >= 0; i--) {
		htmlTopRated = htmlTopRated.concat(createElement(movieTopRated.results[i],'toprated'));
	};
	$("#topRated").append(htmlTopRated);
};

function successResearch(data)
{
	var movieSearch = JSON.parse(data);
	var htmlSearch = '';
	for (var i = movieSearch.results.length - 1; i >= 0; i--) {
		htmlSearch = htmlSearch.concat(createElement(movieSearch.results[i],'research'));
	};
	$("#researchMovie").html(htmlSearch);
};

function successGetById(data)
{
	var movieById = JSON.parse(data);
	var htmlByID = '';
	console.log(data.result);
	/*
	displayDetails(data.result,);*/
	$("#researchMovie").html(htmlSearch);
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

	$(".globalMovieWrapper").on('mouseenter',function () {
		theMovieDb.movies.getById({"id":$this.attr("data-id") }, successGetById, errorCB)
	}).on('mouseleave',function ()
	{
		//$this.find("span").hide();
	});
};