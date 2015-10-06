import template from './kontakt.html';
import controller from './kontakt.controller';
import './kontakt.styl';

let kontaktComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default kontaktComponent;
