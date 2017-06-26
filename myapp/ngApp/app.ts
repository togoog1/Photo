namespace myapp {

    angular.module('myapp', ['ui.router', 'ngResource', 'ui.bootstrap','angular-filepicker']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider,
        filepickerProvider
    ) => { filepickerProvider.setKey('AfnZfsLHQKOEGXcad5dJkz');
        // Define routes
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

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
