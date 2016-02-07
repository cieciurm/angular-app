(function() {
    angular
        .module('myApp')
        .config(['$routeProvider', configureRouting]);

    function configureRouting($routeProvider) {

        $routeProvider.
            when('/movies', {
                templateUrl: 'partials/movies-list.html',
                controller: 'MovieSearchController',
                controllerAs: 'ctrl'
            }).
            when('/movies/:movieId', {
                templateUrl: 'partials/movie-details.html',
                controller: 'MovieDetailsController',
                controllerAs: 'ctrl'
            }).
            otherwise({
                redirectTo: '/movies'
            });
    }
})();
