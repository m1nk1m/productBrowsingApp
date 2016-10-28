angular.module('productApp')
// ProductService returning list of products & product lookup by Id
    .service('productService', function($http, $q, $window) {


        var self = this;
        self.getAllBooks = function () {
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

        self.getBookByCategory = function(cat_id) {
            var deferred = $q.defer();
            setTimeout(function() {
                $http.get('../app/res/data.json')
                    .then(function (result) {
                        var books = [];
                        for(var i=0; i<result.data.books.length; i++) {
                            if(cat_id == result.data.books[i].cat_id ) {
                                books.push(result.data.books[i]);
                            }
                            deferred.resolve(books);
                        }
                    }, function (reason) {
                        deferred.reject(reason);
                    });
            }, 100);
            return deferred.promise;
        };

        self.getBookById = function(book_id) {
            var deferred = $q.defer();
            setTimeout(function() {
                $http.get('../app/res/data.json')
                    .then(function (result) {
                        // var book = {};
                        for(var i=0; i<result.data.books.length; i++) {
                            if(book_id == result.data.books[i]._id ) {
                                deferred.resolve(result.data.books[i]);
                            }
                        }
                    }, function (reason) {
                        deferred.reject(reason);
                    });
            }, 100);
            return deferred.promise;
        };

    });