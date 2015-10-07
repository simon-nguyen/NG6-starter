import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mailComponent from './mail.component';
import mailRouteConfig from './config/route';

let mailModule = angular.module('app.components.mail', [
  uiRouter
])
.config(mailRouteConfig)
.directive('mail', mailComponent);

export default mailModule;
