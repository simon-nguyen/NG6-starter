let kalenderRouteConfig = function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home.kalender', {
			url: 'kalender',
			template: '<kalender></kalender>'
		});
}

export default kalenderRouteConfig;