import angular from 'angular';
import Home from './home/home';
import About from './about/about';

import MeinTag from './meinTag/meinTag';
import Mail from './mail/mail';
import Kontakt from './kontakt/kontakt';
import Kalender from './kalender/kalender';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
	MeinTag.name,
	Mail.name,
	Kontakt.name,
	Kalender.name
]);

export default componentModule;
