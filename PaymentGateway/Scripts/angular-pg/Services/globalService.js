/*
*    Created By: Shashangka Shekhar;
*    Create Date: 22-5-2016 (dd-mm-yy); Updated Date: 22-5-2016 (dd-mm-yy);
*    Name: 'globalService';
*    Type: $http service;
*    Purpose:  ;
*    Service Injected: '$scope', 'globalService', '$window';
*/

app.service('globalService', ['$http',
    function ($http) {
        'use strict'; //code should be executed in "strict mode"

        //Get----get all/paged data from server
        this.getAll = function (ngRouteAction) {
            return $http.get(ngRouteAction);
        }

        //Get----get single data from server
        this.getByID = function (ngRouteAction) {
            return $http.get(ngRouteAction);
        }

        //Post---save posted data to server
        this.post = function (ngRouteAction, ngModel) {
            var request = $http({
                method: "post",
                url: ngRouteAction,
                data: ngModel
            });
            return request;
        }

        //Put----update posted data to server
        this.put = function (ngRouteAction, ngModel) {
            var request = $http({
                method: "put",
                url: ngRouteAction,
                data: ngModel
            });
            return request;
        }

        //Delete-delete selected/collection of data from server
        this.delete = function (ngRouteAction) {
            var request = $http({
                method: "delete",
                url: ngRouteAction
            });
            return request;
        }
    }]);