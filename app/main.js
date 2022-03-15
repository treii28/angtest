require.config({
    baseUrl: "app",
    paths: {
        'jquery'        : "//code.jquery.com/jquery-3.6.0",
        'angular'       : '//ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular',
        'angular-route' : '//ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular-route',
        'angularAMD'    : '//cdn.jsdelivr.net/gh/marcoslin/angularAMD@0.2.1/dist/angularAMD',
        'ngload'        : '//cdn.jsdelivr.net/gh/marcoslin/angularAMD@0.2.1/dist/ngload',

        'MyService' : "services/MyService",
        'MyController' : "controllers/MyController"
    },
    shim: {
        'jquery' : {
            'exports' : "$"
        },
        'angularAMD': {
            'deps' : ['angular']
        },
        'ngload': {
            'deps' : [ 'angularAMD' ]
        },
        'angular-route' : {
            'deps' : ['angular'],
        }
    },
    deps: [
        'jqueryLoader',
        'services',
        'controllers',
        'app'
    ]
});