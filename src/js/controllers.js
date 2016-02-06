(function() {
    angular
        .module('myApp')
        .controller('myController', MyController);
        
    function MyController() {
        this.arr = [0, 1, 2, 3];

        this.doSomething = function() {
            console.log('hehe');
        };
    }

    angular
        .module('myApp')
        .controller('formController', FormController);

    function FormController($log) {
        this.person = {};
    
        this.people = [
            {
                name: 'mateusz',
                city: 'warszawa',
                email: 'something@wp.pl'
            },
            {
                name: 'tymoteusz',
                city: 'krakow',
                email: 'hehe@o2.pl'
            }
        ];

        this.addPerson = function(person) {
            $log.warn('uwaga dodaje');

            this.people.push(person);
            this.person = {};
        };
    }

    FormController.$inject = ['$log'];
})();
