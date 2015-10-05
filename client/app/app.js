import 'bootstrap-less/bootstrap/bootstrap.less';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

import 'normalize.css';

angular.module('app', [
	uiBootstrap,
  uiRouter,
  Common.name,
  Components.name
])

.directive('app', AppComponent);