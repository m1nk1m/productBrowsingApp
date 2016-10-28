angular.module('productApp')
// ProductService returning list of products & product lookup by Id
    .service('productService', function($http, $q) {

        // service initialization
        var self = this;

        // service method 1: get all books
        self.getAllBooks = function () {
            var deferred = $q.defer();
            setTimeout(function() {
                $http.get('../app/res/data.json')
                    .then(function (result) {
                        // books found
                        deferred.resolve(result.data.books);
                    }, function (reason) {
                        // books not found
                        deferred.reject(reason);
                    });
            }, 100);
            return deferred.promise;
        };

        // service method 2: get books by category id
        self.getBooksByCategory = function(cat_id) {
            var deferred = $q.defer();
            setTimeout(function() {
                $http.get('../app/res/data.json')
                    .then(function (result) {

                        // temporary container for the books resulted from search by category id
                        var books = [];

                        // book search loop
                        for(var i=0; i<result.data.books.length; i++) {
                            if(cat_id == result.data.books[i].cat_id ) {
                                books.push(result.data.books[i]);
                            }

                            // books found
                            deferred.resolve(books);
                        }
                    }, function (reason) {

                        // book
                        deferred.reject(reason);
                    });
            }, 100);
            return deferred.promise;
        };

        // service method 3: get one book by book id
        self.getBookById = function(book_id) {
            var deferred = $q.defer();
            setTimeout(function() {
                $http.get('../app/res/data.json')
                    .then(function (result) {

                        // book search loop
                        for(var i=0; i<result.data.books.length; i++) {
                            if(book_id == result.data.books[i]._id ) {
                                // book found
                                deferred.resolve(result.data.books[i]);
                            }
                        }
                    }, function (reason) {
                        // book not found
                        deferred.reject(reason);
                    });
            }, 100);
            return deferred.promise;
        };

    });