(function(){
	angular
		.module('bartApp')
		.config(config)

	config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

	function config($stateProvider, $urlRouterProvider, $locationProvider){
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: '/html/home.html',
				controller: 'HomeController'
			})
			.state('dash', {
				url: '/dash',
				templateUrl: '/html/dash.html',
				controller: 'DashController'
			})
		$urlRouterProvider.otherwise('/');
	}
})();