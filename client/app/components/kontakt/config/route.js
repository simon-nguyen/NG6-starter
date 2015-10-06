let kontaktRouteConfig = function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home.kontakt', {
			url: 'kontakt',
			template: '<kontakt></kontakt>'
		});
}

export default kontaktRouteConfig;