/*
*    Created By: Shashangka Shekhar;
*    Create Date: 22-5-2016 (dd-mm-yy); 
*    Updated Date: 22-5-2016 (dd-mm-yy);
*    Name: 'paymentCtrl';
*    Type: $scope;
*    Purpose: ;
*    Service Injected: '$scope', 'globalService', '$window';
*/

app.controller('paymentCtrl', ['$scope', 'globalService', '$window', 'productService',
    function ($scope, globalService, $window, productService) {
        'use strict'; //code should be executed in "strict mode"

        $scope.pageTitle = "Payments Summary";
        $scope.products = productService.getProducts();

        console.log($scope.products);
    }]);
