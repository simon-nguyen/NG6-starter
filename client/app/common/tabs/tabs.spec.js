import TabsModule from './tabs'
import TabsController from './tabs.controller';
import TabsComponent from './tabs.component';
import TabsTemplate from './tabs.html';
import TabsFactory from './tabs.factory';

describe('Tabs', () => {
  let $rootScope,
    $state,
    makeController,
    makeFactory;

  beforeEach(window.module(TabsModule.name));
  beforeEach(
    inject((_$rootScope_, _$state_) => {

      $rootScope = _$rootScope_;
      $state = _$state_;

      makeController = (factory) => {
        return new TabsController($state, factory);
      };

      makeFactory = () => {
        return TabsFactory;
      };
    })
  );

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () =>

    beforeEach(() => {
      let factory = makeFactory();
      let controller = makeController(factory);
    });

    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      expect(controller).to.have.property('name');
    });
  });

describe('Factory', () => {
  // tabs provider factory specs
  it('should return the app\'s supported tabs', () => {
    let factory = makeFactory();

    // getTabs spec
    let tabs = factory.getTabs();
    expect(tabs.length).toBe(5);
    expect(tabs(0).heading).toBe('Mein Tag');
    expect(tabs(1).heading).toBe('E-Mail');
    expect(tabs(2).heading).toBe('Kontakt');
    expect(tabs(1).heading).toBe('Kalender');
    expect(tabs(2).heading).toBe('Dateiablage');
  });
});

describe('Component', () => {
  // component/directive specs
  let component = TabsComponent();

  it('includes the intended template', () => {
    expect(component.template).to.equal(TabsTemplate);
  });

  it('uses `controllerAs` syntax', () => {
    expect(component).to.have.property('controllerAs');
  });

  it('invokes the right controller', () => {
    expect(component.controller).to.equal(TabsController);
  });
});
});