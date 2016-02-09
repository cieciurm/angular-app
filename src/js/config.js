(function() {
    angular
        .module('myApp')
        .config(['$routeProvider', '$locationProvider', configureRouting]);

    function configureRouting($routeProvider, $locationProvider) {

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

        $locationProvider.html5Mode(true);
    }
})();
