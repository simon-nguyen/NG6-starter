import DateiablageModule from './dateiablage'
import DateiablageController from './dateiablage.controller';
import DateiablageComponent from './dateiablage.component';
import DateiablageTemplate from './dateiablage.html';

describe('Dateiablage', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DateiablageModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DateiablageController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(DateiablageTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = DateiablageComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(DateiablageTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DateiablageController);
      });
  });
});
