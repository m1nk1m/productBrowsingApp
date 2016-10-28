angular.module('productApp')
// CategoryService returning list of categories and category lookup by id
    .service('categoryService', function($http, $q) {

        // service initialization
        var self = this;

        // service method 1: get all categories
        self.getAllCategories = function () {
            var deferred = $q.defer();
            setTimeout(function() {
                $http.get('../app/res/data.json')
                    .then(function (result) {
                        // categories found
                        deferred.resolve(result.data.categories);
                    }, function (reason) {
                        // not found
                        deferred.reject(reason);
                    });
            }, 100);
            return deferred.promise;
        };

        // service method 2: get a category by id
        self.getCategoryById = function(categoryId) {
            var deferred = $q.defer();
            setTimeout(function() {
                $http.get('../app/res/data.json')
                    .then(function (result) {
                        // category search loop
                        for(var i=0; i<result.data.categories.length; i++) {
                            if(categoryId == result.data.categories[i]._id ) {
                                // category found
                                deferred.resolve(result.data.categories[i]);
                            }
                        }
                    }, function (reason) {
                        // not found
                        deferred.reject(reason);
                    });
            }, 100);
            return deferred.promise;
        };
    });