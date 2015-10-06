import template from './meinTag.html';
import controller from './meinTag.controller';
import './meinTag.styl';

let meinTagComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default meinTagComponent;
