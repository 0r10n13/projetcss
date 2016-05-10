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
	<input type="text" id="research" name="research">
	<img src="img/logo_menu.png" id="logo_menu">
</header>
<!-- Add your site or application content here -->
<section id="researchWrapper">
	<section id ="researchMovie"><h1>Recherche</h1>
		<div class="listMovies"></div>
		<div class="movieDetails"></div></section>
</section>
<section id="mainWrapper">
<section id ="nowPlaying"><h1>Dans vos salles</h1>
	<div class="listMovies"></div>
	<div class="movieDetails"></div>
</section>
<section id ="popular"><h1>Populaire</h1>
	<div class="listMovies"></div>
	<div class="movieDetails"></div></section>
<section id ="topRated"><h1>Meilleures notes</h1>
	<div class="listMovies"></div>
	<div class="movieDetails"></div></section>
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
