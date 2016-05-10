function successCB(data) {
    console.log("Success callback: " + data);
};

function errorCB(data) {
            console.log("Error callback: " + data);
    };

var nowplaying = theMovieDb.movies.getNowPlaying({}, successCB, errorCB);
console.log(nowplaying);