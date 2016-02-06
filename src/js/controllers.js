(function() {
    angular
        .module('myApp')
        .controller('movieSearchController', MovieSearchController);

    function MovieSearchController($log, omdbApiService) {
        var self = this;

        self.movies = [];

        self.searchData = {};
        
        self._init = function() {
            self._getMovies({ title: 'batman' });

            $log.warn('initialize');
        };

        self.searchMovie = function() {
            self.movies = [];

            self._getMovies(self.searchData);
        };

        self._getMovies = function(searchData) {
            self.movies = omdbApiService.listMovies(searchData);
        };

        self._init();
    }

    MovieSearchController.$inject = ['$log', 'omdbApiService'];
})();
