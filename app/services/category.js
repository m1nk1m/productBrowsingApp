angular.module('productApp')
// CategoryService returning list of categories and category lookup by id
    .service('categoryService', function($http, $q, $window) {
        var self = this;
        self.getAllCategories = function () {
            var deferred = $q.defer();
            setTimeout(function() {
                $http.get('../app/res/data.json')
                    .then(function (result) {
                        deferred.resolve(result.data.categories);
                    }, function (reason) {
                        deferred.reject(reason);
                    });
            }, 100);
            return deferred.promise;
        };
        self.getCategoryById = function(categoryId) {
            var deferred = $q.defer();
            setTimeout(function() {
                $http.get('../app/res/data.json')
                    .then(function (result) {
                        for(var i=0; i<result.data.categories.length; i++) {
                            if(categoryId == result.data.categories[i]._id ) {
                                deferred.resolve(result.data.categories[i]);
                            }
                        }
                    }, function (reason) {
                        deferred.reject(reason);
                    });
            }, 100);
            return deferred.promise;
        };
    });