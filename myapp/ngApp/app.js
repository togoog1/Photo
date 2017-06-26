var myapp;
(function (myapp) {
    angular.module('myapp', ['ui.router', 'ngResource', 'ui.bootstrap', 'angular-filepicker']).config(function ($stateProvider, $urlRouterProvider, $locationProvider, filepickerProvider) {
        filepickerProvider.setKey('AfnZfsLHQKOEGXcad5dJkz');
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: '/ngApp/views/home.html',
            controller: myapp.Controllers.HomeController,
            controllerAs: 'vm'
        })
            .state('add', {
            url: '/add',
            templateUrl: '/ngApp/views/addPhoto.html',
            controller: myapp.Controllers.AddPhotoController,
            controllerAs: 'vm'
        })
            .state('edit', {
            url: '/edit/:id',
            templateUrl: '/ngApp/views/editPhoto.html',
            controller: myapp.Controllers.EditPhotoController,
            controllerAs: 'vm'
        })
            .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    });
})(myapp || (myapp = {}));
