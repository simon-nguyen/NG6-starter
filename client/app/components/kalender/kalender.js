import angular from 'angular';
import uiRouter from 'angular-ui-router';
import kalenderComponent from './kalender.component';
import kalenderRouteConfig from './config/route';

let kalenderModule = angular.module('kalender', [
  uiRouter
])
.config(kalenderRouteConfig)
.directive('kalender', kalenderComponent);

export default kalenderModule;