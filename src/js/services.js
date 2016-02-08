(function() {
    angular
        .module('myApp')
        .service('omdbApiService', OmdbApiService);

    function OmdbApiService($http, $q) {
        var self = this;

        self.listMovies = function(searchData) {
            var movies = [];

            var deferred = $q.defer();

            $http
                .get('http://www.omdbapi.com/?s=' + searchData.title + '&y=' + searchData.year)
                .then(function(response) {

                    if (response.data.Response === "False") {
                        deferred.reject(response.data.Error);
                        return;
                    }

                    for (var i = 0; i < response.data.Search.length; i++) {
                        var movie = response.data.Search[i];

                        movies.push({ 
                            title: movie.Title,
                            year: movie.Year,
                            imdbID: movie.imdbID
                        });
                    }
                    deferred.resolve(movies);
                });

            return deferred.promise;
        };

        self.getDetails = function(id) {
            var movie = {};

            var deferred = $q.defer();

            $http
                .get('http://www.omdbapi.com/?i=' + id)
                .then(function(response) {

                    if (response.data.Response === "False") {
                        deferred.reject(response.data.Error);
                        return;
                    }

                    movie.Title = response.data.Title;
                    movie.Year = response.data.Year;

                    deferred.resolve(movie);
                });

            return deferred.promise;
        };
    }

    OmdbApiService.$inject = ['$http', '$q'];

})();
