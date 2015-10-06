// http://www.sitepoint.com/writing-angularjs-apps-using-es6/

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import tabsComponent from './tabs.component';
import tabsFactory from './tabs.factory';

let tabsModule = angular.module('app.common.tabs', [
  uiRouter
])
// Register factories
.factory('tabsProviderService', tabsFactory)

// Register directives
.directive('tabs', tabsComponent);

export default tabsModule;
