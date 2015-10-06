import template from './kalender.html';
import controller from './kalender.controller';
import './kalender.styl';

let kalenderComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default kalenderComponent;
