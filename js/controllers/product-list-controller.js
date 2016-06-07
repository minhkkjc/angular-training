/**
 * Created by Minh on 6/5/2016.
 */
(function() {
    angular.module('trainingAngular').controller('ProductListController', ['$http', function($http) {
        var t = this;

        $http({
            method: 'POST',
            url: 'app/product-list.php',
            data: "action=getListProduct"
        }).then(function(data) {
            t.products = data.data;
        });
    }]);
})();
