//#region menu
app.directive('menu', function(comum, $rootScope, $localStorage, $location) {

    return {
        templateUrl: "directives/menu.html",
        require: "?ngModel",

        link: function(scope) {

            scope.logout = function() {
                $localStorage.$reset();
                $location.url('/');
            }

        }
    };

});
//#endregion