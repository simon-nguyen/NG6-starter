let meinTagRouteConfig = function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home.meinTag', {
			url: 'meinTag',
			template: '<mein-tag></mein-tag>'
		});
}

export default meinTagRouteConfig;