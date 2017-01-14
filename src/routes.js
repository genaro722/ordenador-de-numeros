angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('list', {
      url: '/',
      component: 'list'
    })
    .state('detail', {
      url: '/detail',
      component: 'detail'
    });
}
