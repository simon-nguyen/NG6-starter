import angular from 'angular';
import Navbar from './navbar/navbar';
import Tabs from './tabs/tabs';
import Hero from './hero/hero';
import User from './user/user';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Hero.name,
  User.name,
	Tabs.name
]);

export default commonModule;