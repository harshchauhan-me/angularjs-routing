var app = angular
    .module("app", ['ngRoute'])
    .controller("routeCtrl", ["$scope", function ($scope) {
        $scope.message="AngularJS Routing";
    }
    ]);