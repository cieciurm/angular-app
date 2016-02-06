(function() {
    angular
        .module('myApp')
        .controller('movieSearchController', MovieSearchController);

    function MovieSearchController($http, $log) {
        var self = this;

        self.movies = [];

        self.searchData = {};
        
        self._init = function() {
            self._getMovies('batman', null);

            $log.warn('initialize');
        };

        self.searchMovie = function() {
            self.movies = [];

            self._getMovies(self.searchData.title, self.searchData.year);
        };

        self._getMovies = function(title, year) {
            $http.get('http://www.omdbapi.com/?s=' + title + '&y=' + year)
            .then(function(response) {
                for(var i = 0; i < response.data.Search.length; i++) {
                    var movie = response.data.Search[i];

                    self.movies.push({ title: movie.Title, year: movie.Year });
                }
            });
        };

        self._init();
    }

    MovieSearchController.$inject = ['$http', '$log'];
})();
