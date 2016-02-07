(function() {
    angular
        .module('myApp')
        .service('omdbApiService', OmdbApiService);

    function OmdbApiService($http) {
        var self = this;

        self.listMovies = function(searchData) {
            var movies = [];

            $http
                .get('http://www.omdbapi.com/?s=' + searchData.title + '&y=' + searchData.year)
                .then(function(response) {

                    if (response.data.Response === "False") {
                        return movies;
                    }

                    for (var i = 0; i < response.data.Search.length; i++) {
                        var movie = response.data.Search[i];

                        movies.push({ 
                            title: movie.Title,
                            year: movie.Year,
                            imdbID: movie.imdbID
                        });
                    }
                });

            return movies;
        };

        self.getDetails = function(id) {
            var movie = {};

            $http
                .get('http://www.omdbapi.com/?i=' + id)
                .then(function(response) {

                    if (response.data.Response === "False") {
                        return movie;
                    }

                    movie.Title = response.data.Title;
                    movie.Year = response.data.Year;

                });

            return movie;
        };
    }

    OmdbApiService.$inject = ['$http'];

})();
