/**
 * Created by Min on 2016-10-27.
 */
angular.module('productApp')
    .controller('CategoriesController', ['$scope', '$log', 'productService', 'categoryService', '$stateParams', function ($scope, $log, productService, categoryService, $stateParams) {

        var promiseCategories = categoryService.getAllCategories();
        promiseCategories.then(function (data) {
            $scope.categories = data;
            console.log("categories", $scope.categories);
        }, function (reason) {
            console.log("Failed because of: ", reason);
        });
    }])
    .controller('CategoryController', ['$scope', '$stateParams', 'categoryService', 'productService', function ($scope, $stateParams, categoryService, productService) {

        $scope.id = $stateParams.categoryId;

        var promiseCategory = categoryService.getCategoryById($scope.id);
        promiseCategory.then(function (data) {
            $scope.category = data;
        }, function (reason) {
            console.log("Failed because of: ", reason);
        });

        var promiseBooks = productService.getBookByCategory($scope.id);
        promiseBooks.then(function(data) {
            $scope.books = data;
            console.log($scope.books);
        }, function (reason) {
            console.log("Failed because of: ", reason);
        });

    }])
    .controller('ProductController', ['$scope', '$stateParams', 'productService', function($scope, $stateParams, productService) {
        $scope.id = $stateParams.productId;

        var promiseBook = productService.getBookById($scope.id);
        promiseBook.then(function(data) {
            $scope.book = data;
        }, function (reason) {
            console.log("Failed because of: ", reason);
        });
    }]);

