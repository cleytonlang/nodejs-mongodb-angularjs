app = angular.module('appLivros', ["ngRoute", "ngStorage"]);

app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: "./views/login.html",
            controller: "loginCtrl"
        })
        .when('/solicitarcadastro/', {
            templateUrl: "./views/solicitarcadastro.html",
            controller: "cadastroCtrl"
        })
        .when('/livros/', {
            templateUrl: "./views/livros.html",
            controller: "livrosCtrl"
        })
        .when('/livros-listagem/', {
            templateUrl: "./views/livros-listagem.html",
            controller: "livrosCtrl"
        }).otherwise({
            templateUrl: "./views/login.html",
            controller: "loginCtrl"
        });
});

app.run(function($location, $localStorage, $location) {
    var url = $location.path().split('/');
    if (url[1] == 'login' || url[1] == '') {
        if ($localStorage.id) {
            $location.path('livros');
        }
    }

    if (url[1] != 'login') {
        if (!$localStorage.id) {
            $location.path('login');
        }
    }
});