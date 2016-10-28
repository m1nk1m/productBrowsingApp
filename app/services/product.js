angular.module('productApp')
// ProductService returning list of products & product lookup by Id
    .service('productService', function($http, $q, $window) {
        this.get = function () {
            var deferred = $q.defer();
            setTimeout(function() {
                $http.get('../app/res/data.json')
                    .then(function (result) {
                        console.log(result);
                        deferred.resolve(result.data.books);
                    }, function (reason) {
                        deferred.reject(reason);
                    });
            }, 100);

            console.log(deferred.promise);
            return deferred.promise;
        };

    });