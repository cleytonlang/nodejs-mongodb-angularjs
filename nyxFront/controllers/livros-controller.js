app.controller('livrosCtrl', function($scope, comum, $location, $localStorage) {

    $scope.livro = {};
    $scope.existe = false;
    $scope.buscarLivro = function(form) {
        comum.get('/livro/livros?livro=' + form.livro).then(function successCallback(response) {
            $scope.form.livro = '';
            if (!response.data.Error) {
                $scope.cadastrou = false;
                $scope.existe = true;
                $scope.livro = { titulo: response.data.Title, capa: response.data.Poster, resumo: response.data.Plot };
            } else {
                $scope.existe = false;
                $scope.livro = { titulo: 'Nenhum livro encontrado', capa: 'N/A' };
            }
        });
    }

    $scope.cadastrou = false;
    $scope.adicionarLivro = function() {
        $scope.cadastrou = false;
        comum.post('/livro/livros', $scope.livro).then(function successCallback(response) {
            if (response.data._id) {
                $scope.cadastrou = true;
            }
        });
    }

    $scope.livros = {};
    $scope.buscarLivros = function(form) {
        comum.get('/livro/livros/all').then(function successCallback(response) {
            $scope.livros = response.data;
        });
    }

    $scope.removerLivro = function(id) {
        comum.post('/livro/livros/remover', { 'id': id }).then(function successCallback(response) {
            if (response.data.msg) {
                $location.url('livros-listagem');
            }
        });
    }

});