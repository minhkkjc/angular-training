/**
 * Created by Minh on 6/5/2016.
 */
(function() {
    angular.module('trainingAngular').controller('ProductListController', ['$http', function($http) {
        $http({
            method: 'POST',
            url: 'app/product-list.php',
            data: "action=getListProduct",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(data) {
            console.log(data);
        });
    }]);
})();
