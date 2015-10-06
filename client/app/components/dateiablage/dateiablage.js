import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dateiablageComponent from './dateiablage.component';

let dateiablageModule = angular.module('dateiablage', [
  uiRouter
])

.directive('dateiablage', dateiablageComponent);

export default dateiablageModule;
