/**
 * Created by Minh on 6/5/2016.
 */
(function() {
    angular.module('trainingAngular').controller('ProductListController', ['$http', function($http) {
        var t = this;
        var product = {};

        $http({
            method: 'POST',
            url: 'app/product-list.php',
            data: "action=getListProduct"
        }).then(function(data) {
            t.products = data.data;
        });

        t.addProduct = function(product) {
            $http({
                method: 'POST',
                url: 'app/product-list.php',
                data: "action=addProduct&name=" + product.name + "&description=" + product.description + "&price=" + product.price
            }).then(function(data) {
                if (data.data) {
                    t.products.push(product);
                    t.product = {};
                }
            });
        }
    }]);
})();
