
define(['angularAMD', 'angular-route'], function (angularAMD) {
    var app = angular.module("app", ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/myview', {
                templateUrl: "views/myview.html"
            })
            .when('/details', {
                templateUrl: "views/details.html",
                controller: "MyController"
            })
            .otherwise({redirectTo: "/myview"});
    });

    return angularAMD.bootstrap(app);
});

