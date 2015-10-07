let dateiablageRouteConfig = function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home.dateiablage', {
			url: 'dateiablage',
			template: '<dateiablage></dateiablage>'
		});
}

export default dateiablageRouteConfig;