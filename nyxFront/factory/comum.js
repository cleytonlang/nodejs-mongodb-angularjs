app.factory('comum', function($http) {
    var baseUrl = "http://localhost:8080";
    return {
        get: function(path) {
            return $http({
                method: 'GET',
                url: baseUrl + path
            })
        },
        post: function(path, data) {
            return $http({
                method: 'POST',
                url: baseUrl + path,
                data: data
            })
        }
    }
})