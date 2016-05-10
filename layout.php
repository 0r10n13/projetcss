<!doctype html>
<html class="no-js" lang="">
<head>
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<title></title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="apple-touch-icon" href="apple-touch-icon.png">
	<!-- Place favicon.ico in the root directory -->

	<link rel="stylesheet" href="css/normalize.css">
	<link rel="stylesheet" href="css/main.css">
	<link rel="stylesheet" href="css/list.css">
</head>
<body>
<!--[if lt IE 8]>
<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->
<header>
	<a href="index.php" id="logo">RILFLIX</a>
	<img src="img\logo_menu.png" id="logo_menu">
	
</header>
<!-- Add your site or application content here -->
<input type="text" id="research" name="research">
<section id="researchWrapper">
	<section id ="researchMovie"><h1>Recherche</h1>
		<div class="listMovies"></div>
		<div class="movieDetails">
			<div class="movieItem" id="researchItemMovie">
				<div class="moviePoster" id="researchItemPoster">
					<img id="researchItemImg" src="http://image.tmdb.org/t/p/w342/dkMD5qlogeRMiEixC4YNPUvax2T.jpg" alt="poster">
					<span class="movieTitle" id="researchItemTitle">Titre</span>
				</div><div
					class="movieDetails">
					<div class="detailsRating">
						Note : <span id="researchItemNote"></span>/10
					</div>
					<div>
						<span class="detailsTitle">Description : </span>
						<span id="researchItemDescription">Test</span>
					</div>

					<div>
						<span class="detailsTitle">Genre : </span>
						<span id="researchItemGenre">Test</span>
					</div>
					<div>
						<span class="detailsTitle">Date de sortie : </span>
						<span id="researchItemDate">Test</span>
					</div>
				</div>
			</div>
		</div>
	</section>
</section>
<section id="mainWrapper">
<section id ="nowPlaying"><h1>Dans vos salles</h1>
	<div class="listMovies"></div>
	<div class="movieDetails">
		<div class="movieItem" id="nowplayingItemMovie">
			<div class="moviePoster" id="nowplayingItemPoster">
				<img id="nowplayingItemImg" src="http://image.tmdb.org/t/p/w342/dkMD5qlogeRMiEixC4YNPUvax2T.jpg" alt="poster">
				<span class="movieTitle" id="nowplayingItemTitle">Titre</span>
			</div><div
				class="movieDetails">
				<div class="detailsRating">
					Note : <span id="nowplayingItemNote"></span>/10
				</div>
				<div>
					<span class="detailsTitle">Description : </span>
					<span id="nowplayingItemDescription">Test</span>
				</div>

				<div>
					<span class="detailsTitle">Genre : </span>
					<span id="nowplayingItemGenre">Test</span>
				</div>
				<div>
					<span class="detailsTitle">Date de sortie : </span>
					<span id="nowplayingItemDate">Test</span>
				</div>
			</div>
		</div>

	</div>
</section>
<section id ="popular"><h1>Populaire</h1>
	<div class="listMovies"></div>
	<div class="movieDetails">
		<div class="movieItem" id="popularItemMovie">
			<div class="moviePoster" id="popularItemPoster">
				<img id="popularItemImg" src="http://image.tmdb.org/t/p/w342/dkMD5qlogeRMiEixC4YNPUvax2T.jpg" alt="poster">
				<span class="movieTitle" id="popularItemTitle">Titre</span>
			</div><div
				class="movieDetails">
				<div class="detailsRating">
					Note : <span id="popularItemNote"></span> /10
				</div>
				<div>
					<span class="detailsTitle">Description : </span>
					<span id="popularItemDescription">Test</span>
				</div>

				<div>
					<span class="detailsTitle">Genre : </span>
					<span id="popularItemGenre">Test</span>
				</div>
				<div>
					<span class="detailsTitle">Date de sortie : </span>
					<span id="popularItemDate">Test</span>
				</div>
			</div>
		</div>

	</div>
</section>
<section id ="topRated"><h1>Meilleures notes</h1>
	<div class="listMovies"></div>
	<div class="movieDetails">
		<div class="movieItem" id="topratedItemMovie">
			<div class="moviePoster" id="topratedItemPoster">
				<img id="topratedItemImg" src="http://image.tmdb.org/t/p/w342/dkMD5qlogeRMiEixC4YNPUvax2T.jpg" alt="poster">
				<span class="movieTitle" id="topratedItemTitle">Titre</span>
			</div><div
				class="movieDetails">
				<div class="detailsRating">
					Note : <span id="topratedItemNote"></span> /10
				</div>
				<div>
					<span class="detailsTitle">Description : </span>
					<span id="topratedItemDescription">Test</span>
				</div>

				<div>
					<span class="detailsTitle">Genre : </span>
					<span id="topratedItemGenre">Test</span>
				</div>
				<div>
					<span class="detailsTitle">Date de sortie : </span>
					<span id="topratedItemDate">Test</span>
				</div>
			</div>
		</div>
	</div>
</section>
</section>
<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.12.0.min.js"><\/script>')</script>
<script src="js/plugins.js"></script>
<script src="js/main.js"></script>
<script src="js/vendor/modernizr-2.8.3.min.js"></script>
<script src="js/vendor/tmdb-min.js"></script>
<script src="js/getMovie.js"></script>

<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
<script>
(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
	function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
e=o.createElement(i);r=o.getElementsByTagName(i)[0];
e.src='https://www.google-analytics.com/analytics.js';
r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
ga('create','UA-XXXXX-X','auto');ga('send','pageview');
</script>
</body>
</html>
