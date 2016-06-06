/**
 * Created by Minh on 6/5/2016.
 */
(function() {
    angular.module('trainingAngular').config(function($routeProvider) {
        $routeProvider.when('/notes', {
            templateUrl: 'templates/product-list.html',
            controller: 'ProductListController',
            controllerAs: 'productListCtrl'
        })
            .when('/', {
                redirectTo: '/notes'
            })
            .otherwise({redirectTo: '/'});
    });
})();