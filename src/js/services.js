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

                        movies.push({ title: movie.Title, year: movie.Year });
                    }
                });

            return movies;
        };
    }

    OmdbApiService.$inject = ['$http'];

})();
