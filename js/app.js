/**
 * Created by Minh on 6/5/2016.
 */
(function() {
    var app = angular.module('trainingAngular', ['ngRoute'], function($httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    });

})();