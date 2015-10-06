import template from './mail.html';
import controller from './mail.controller';
import './mail.styl';

let mailComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default mailComponent;
