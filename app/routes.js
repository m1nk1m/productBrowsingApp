/**
 * Created by Min on 2016-10-27.
 */
angular.module('productApp')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        // setting the default page
        $urlRouterProvider.when('', '/categories');

        $stateProvider
            // displaying all the categories
            .state('categories', {
                url:'/categories',
                templateUrl: 'templates/categories.html',
                controller: 'CategoriesController'
            })
            // displaying books in the selected category
            .state('category', {
                url:'category/{categoryId}',
                templateUrl: 'templates/category.html',
                controller: 'CategoryController'
            })
            // displaying information of the selected book
            .state('category.product', {
                url:'/{productId}',
                templateUrl: 'templates/product.html',
                controller: 'ProductController'
            });
    }]);
