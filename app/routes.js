/**
 * Created by Min on 2016-10-27.
 */
angular.module('productApp')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.when('', '/categories');
        $stateProvider
            .state('categories', {
                url:'/categories',
                templateUrl: 'templates/categories.html',
                controller: 'CategoriesController'
            })
            .state('category', {
                url:'category/{categoryId}',
                templateUrl: 'templates/category.html',
                controller: 'CategoryController'
            })
            .state('category.product', {
                url:'/{productId}',
                templateUrl: 'templates/product.html',
                controller: 'ProductController'
            });
    }]);
