import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dateiablageComponent from './dateiablage.component';
import dateiablageRouteConfig from './config/route';

let dateiablageModule = angular.module('dateiablage', [
  uiRouter
])
.config(dateiablageRouteConfig)
.directive('dateiablage', dateiablageComponent);

export default dateiablageModule;
