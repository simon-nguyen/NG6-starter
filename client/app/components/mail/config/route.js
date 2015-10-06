let mailRouteConfig = function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home.mail', {
			url: 'mail',
			template: '<mail></mail>'
		});
}

export default mailRouteConfig;