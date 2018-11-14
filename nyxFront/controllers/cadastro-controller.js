app.controller('cadastroCtrl', function($scope, $http, comum, $location, $rootScope) {

    $scope.voltarLogin = function() {
        $location.url('/');
    }

    $scope.msg = '';
    $scope.sucesso = false;
    $scope.solicitarCadastro = function(data) {
        comum.post('/usuario/usuarios', data).then(function successCallback(response) {
            if (response.data.msg) {
                $scope.msg = response.data.msg;
                $scope.sucesso = false;
            } else {
                $scope.msg = '';
                $scope.sucesso = true;
            }
        }, function errorCallback(response) {

        });
    }

});