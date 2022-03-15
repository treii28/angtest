define( ['app'], function (app) {
    app.controller('MyController', ['$scope', 'MyService',
        function ($scope, MyService) {
            console.log('MyController instantiation')
            $scope.message1 = "controller test message"
            $scope.message2 = MyService.getMessage()
            $scope.jqv = $.fn.jquery
        }])
})