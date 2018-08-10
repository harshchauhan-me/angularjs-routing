app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: "/views/home.html"
            // controller:"homeCtrl"
        })
        .when('/about', {
            templateUrl: "/views/about.html"
            // controller:"aboutCtrl"
        })
        .when('/contact', {
            templateUrl: "/views/contact.html"
            // controller:"contactCtrl"
        })

        .otherwise('/home');
}]
);