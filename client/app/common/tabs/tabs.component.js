import template from './tabs.html';
import controller from './tabs.controller';
import './tabs.styl';

let tabsComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default tabsComponent;
