import template from './dateiablage.html';
import controller from './dateiablage.controller';
import './dateiablage.styl';

let dateiablageComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default dateiablageComponent;
