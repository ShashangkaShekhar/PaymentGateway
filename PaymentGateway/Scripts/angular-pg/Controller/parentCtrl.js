/*
*    Created By: Shashangka Shekhar;
*    Create Date: 22-5-2016 (dd-mm-yy); 
*    Updated Date: 22-5-2016 (dd-mm-yy);
*    Name: 'parentCtrl';
*    Type: $scope;
*    Purpose: ;
*    Service Injected: '$scope', 'globalService', '$window';
*/

app.controller('parentCtrl', ['$scope', 'globalService', '$window',
    function ($scope, globalService, $window) {
        'use strict'; //code should be executed in "strict mode"
        $scope.pageTitle = "Online Payment";
    }]);
