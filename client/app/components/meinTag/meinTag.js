import angular from 'angular';
import uiRouter from 'angular-ui-router';
import meinTagComponent from './meinTag.component';
import meinTagRouteConfig from './config/route';

let meinTagModule = angular.module('meinTag', [
  uiRouter
])
.config(meinTagRouteConfig)
.directive('meinTag', meinTagComponent);

export default meinTagModule;