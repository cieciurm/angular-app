(function() {
    angular
        .module('myApp')
        .controller('MovieSearchController', MovieSearchController)
        .controller('MovieDetailsController', MovieDetailsController);

    function MovieSearchController($log, omdbApiService) {
        var self = this;
        self.movies = [];
        self.searchData = {};
        self.errorMsg = '';
        
        self._searchMovies = function(searchData) {
            omdbApiService
                .listMovies(searchData)
                .then(function(movies) {
                    self.movies = movies;
                    self.errorMsg = '';
                }, function(error) {
                    self.movies = [];
                    self.errorMsg = error;
                    $log.log(error);
                });
        };

        self._init = function() {
            self._searchMovies({ title: 'batman' });

            $log.warn('initialize');
        };

        self.searchMovie = function() {
            self.movies = [];

            self._searchMovies(self.searchData);
        };

        self._init();
    }

    MovieSearchController.$inject = ['$log', 'omdbApiService'];

    function MovieDetailsController(omdbApiService, $routeParams, $log) {
        var self = this;
        self.movie = {};
        self.errorMsg = '';

        self.getDetails = function() {
            omdbApiService
                .getDetails($routeParams.movieId)
                .then(function(movie) {
                    self.movie = movie;
                    self.errorMsg = '';
                }, function(error) {
                    self.errorMsg = error;
                    $log.log(error);
                });
        };

        self.getDetails();
    }

    MovieDetailsController.$inject = ['omdbApiService', '$routeParams', '$log'];
})();
