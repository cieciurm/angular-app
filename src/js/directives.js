(function() {
    angular
        .module('myApp')
        .directive('movieListItem', movieListItem);

    function movieListItem() {
        return {
            templateUrl: 'directives/movie-list-item.html'
        }
    }
})();
