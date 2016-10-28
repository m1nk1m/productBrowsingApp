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

        $scope.goToCategory = function(id) {

            $scope.categoryId = id;
            var promiseCategory = categoryService.getCategoryById(id);
            promiseCategory.then(function (data) {
                $scope.category = data;
                console.log("categories", $scope.category);
            }, function (reason) {
                console.log("Failed because of: ", reason);
            });



            // $scope.categoryId = id;
            console.log($scope.categoryId);
        };





    }])
    .controller('CategoryController', ['$scope', '$stateParams', function ($scope, $stateParams) {
        // console.log("we are at ", $stateParams.categoryId);
        $scope.id = $stateParams;
        console.log($scope.id);
    }])

    .component('category', {
        bindings: {},
        template: {}
    });

