import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dateiablageComponent from './dateiablage.component';
import dateiablageRouteConfig from './config/route';

let dateiablageModule = angular.module('app.components.dateiablage', [
  uiRouter
])
.config(dateiablageRouteConfig)
.directive('dateiablage', dateiablageComponent);

export default dateiablageModule;
