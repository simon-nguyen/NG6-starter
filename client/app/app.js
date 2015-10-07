// Style import
import 'bootstrap-less/bootstrap/bootstrap.less';
import 'normalize.css';

// External import
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';

// Internal import
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

angular.module('app', [
	uiBootstrap,
  uiRouter,
  Common.name,
  Components.name
])

.directive('app', AppComponent);