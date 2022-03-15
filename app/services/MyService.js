define( ["app"], function (app) {
    console.log("services/MyService.js loaded.")

    var MyService = function($rootScope) {
        console.log("in MyService constructor")
    }

    MyService.prototype = {
        constructor: MyService,
        // comma separated list of methods and properties
        message: "service test message",
        getMessage: function() {
            return this.message
        }
    }

    app.factory('MyService', ['$rootScope', function($rootScope) {
        console.log('instantiating MyService.')
        return new MyService($rootScope)
    }])
})