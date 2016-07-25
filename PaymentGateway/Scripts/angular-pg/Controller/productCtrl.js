/*
*    Created By: Shashangka Shekhar;
*    Create Date: 22-5-2016 (dd-mm-yy); 
*    Updated Date: 22-5-2016 (dd-mm-yy);
*    Name: 'productCtrl';
*    Type: $scope;
*    Purpose: ;
*    Service Injected: '$scope', 'globalService', '$window';
*/

app.controller('productCtrl', ['$scope', 'globalService', '$window', 'productService',
    function ($scope, globalService, $window, productService) {
        'use strict'; //code should be executed in "strict mode"

        $scope.pageTitle = "Products";
        $scope.items = [];
        $scope.items = [
          {
              ProductID: 1,
              ProductTitle: 'Pant',
              Curency: 'TK',
              Price: 2000,
              Remarks: 'Eid special Collection'
          },
          {
              ProductID: 2,
              ProductTitle: 'Jeanse',
              Curency: 'TK',
              Price: 3500,
              Remarks: 'Eid special Collection'
          },
          {
              ProductID: 3,
              ProductTitle: 'T-Shirt',
              Curency: 'TK',
              Price: 1500,
              Remarks: 'Eid special Collection'
          },
        ];

        $scope.buynow = function (model) {
            productService.addProduct(model);
            $scope.products = productService.getProducts();
            console.log($scope.products);
            //$scope.paymentTotal = model.Price;
            //$window.location = '/Payment';
            //console.log(model);
        }
    }]);
