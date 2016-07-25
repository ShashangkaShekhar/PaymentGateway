/*
*    Created By: Shashangka Shekhar;
*    Create Date: 22-5-2016 (dd-mm-yy); Updated Date: 22-5-2016 (dd-mm-yy);
*    Name: 'productService';
*    Type: $http service;
*    Purpose: ;
*    Service Injected: '$scope', 'globalService', '$window';
*/

app.service('productService', [
    function () {

        'use strict'; //code should be executed in "strict mode"
        var productList = [];

        var addProduct = function (newObj) {
            productList.push(newObj);
        };

        var getProducts = function () {
            return productList;
        };

        return {
            addProduct: addProduct,
            getProducts: getProducts
        };

    }]);