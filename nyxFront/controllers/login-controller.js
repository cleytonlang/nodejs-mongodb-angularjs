app.controller('loginCtrl', function($scope, comum, $location, $localStorage) {
    $scope.destinos = [];
    $scope.pesquisa = {};

    $scope.msg = '';
    $scope.getLogin = function(data) {
        comum.get('/usuario/usuarios?login=' + data.login + '&senha=' + data.senha).then(function successCallback(response) {
            if (response.data.msg) {
                $scope.msg = response.data.msg;
            } else {
                $localStorage.id = response.data._id;
                $localStorage.login = response.data.login;
                $scope.msg = '';
                $location.url('livros');
            }
        }, function errorCallback(response) {

        });
    }

    $scope.solicitarcadastro = function() {
        $location.url('solicitarcadastro');
    }

});