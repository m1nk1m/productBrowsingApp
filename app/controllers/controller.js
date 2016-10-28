/**
 * Created by Min on 2016-10-27.
 */
angular.module('productApp')
    .controller('CategoriesController', ['$scope', '$log', 'productService', 'categoryService', '$stateParams', function ($scope, $log, productService, categoryService, $stateParams) {

        // Promise: get categories data
        var promiseCategories = categoryService.getAllCategories();

        promiseCategories.then(function (data) {
            // succeeded
            $scope.categories = data;
        }, function (reason) {
            // failed
            console.log("Failed because of: ", reason);
        });
    }])
    .controller('CategoryController', ['$scope', '$stateParams', 'categoryService', 'productService', function ($scope, $stateParams, categoryService, productService) {

        // get categoryId from the categories page
        $scope.id = $stateParams.categoryId;

        // Promise: get category data by category id
        var promiseCategory = categoryService.getCategoryById($scope.id);

        promiseCategory.then(function (data) {
            // succeeded
            $scope.category = data;
        }, function (reason) {
            // failed
            console.error("Failed because of: ", reason);
        });

        // Promise: get books by category id
        var promiseBooks = productService.getBooksByCategory($scope.id);

        promiseBooks.then(function(data) {
            // succeeded
            $scope.books = data;
        }, function (reason) {
            // failed
            console.error("Failed because of: ", reason);
        });

    }])
    .controller('ProductController', ['$scope', '$stateParams', 'productService', function($scope, $stateParams, productService) {

        // get book id from the category page
        $scope.id = $stateParams.productId;

        // Promise: get book by book id
        var promiseBook = productService.getBookById($scope.id);

        promiseBook.then(function(data) {
            // succeeded
            $scope.book = data;
        }, function (reason) {
            // failed
            console.log("Failed because of: ", reason);
        });
    }]);

