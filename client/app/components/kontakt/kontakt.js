import angular from 'angular';
import uiRouter from 'angular-ui-router';
import kontaktComponent from './kontakt.component';
import kontaktRouteConfig from './config/route';

let kontaktModule = angular.module('kontakt', [
  uiRouter
])
.config(kontaktRouteConfig)
.directive('kontakt', kontaktComponent);

export default kontaktModule;
