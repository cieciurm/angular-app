(function() {
    angular
        .module('myApp')
        .controller('MovieSearchController', MovieSearchController)
        .controller('MovieDetailsController', MovieDetailsController);

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

    function MovieDetailsController(omdbApiService, $routeParams) {
        var self = this;

        self.movie = {};

        self.getDetails = function() {
            self.movie = omdbApiService.getDetails($routeParams.movieId);
        };

        self.getDetails();
    }

    MovieDetailsController.$inject = ['omdbApiService', '$routeParams'];
})();
