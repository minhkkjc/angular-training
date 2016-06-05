/**
 * Created by Minh on 6/5/2016.
 */
(function() {
    angular.module('trainingAngular').config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/product-list.html'
        })
            .otherwise('/');
    });
})();