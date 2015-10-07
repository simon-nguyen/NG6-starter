import TabsModule from './tabs'
import TabsController from './tabs.controller';
import TabsComponent from './tabs.component';
import TabsTemplate from './tabs.html';
import TabsFactory from './tabs.factory';

describe('Tabs', () => {
  let $q,
    $rootScope,
    $state,
    tabsController,
    tabsProviderFactory;

  beforeEach(window.module(TabsModule.name));

  beforeEach(() => {

    // provide the factory
    window.module(($provide) => {
      $provide.factory('tabsProviderFactory', TabsFactory);
    });

    inject((_$q_, _$rootScope_, _$state_, _tabsProviderFactory_) => {
      $q = _$q_;
      $rootScope = _$rootScope_;
      $state = _$state_;

      // set up sinon-as-promised, otherwise it won't work!
      //sinonAsPromised($q);

      tabsProviderFactory = _tabsProviderFactory_;
    })
  });

  beforeEach(() => {
    tabsController = new TabsController($state, tabsProviderFactory);
  })

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {

    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      expect(tabsController).to.have.property('name');
    });
    it('has a tabs property', () => {
      expect(tabsController).to.have.property('tabs');
    });
    it('has 5 elements in tabs property when init', () => {
      let tabs = tabsController.tabs;
      expect(tabs.length).to.equal(5);
    })
  });

  describe('Factory', () => {
    // tabs provider factory specs
    it('should return the app\'s supported tabs', () => {

      // getTabs spec
      let tabs = tabsProviderFactory.getTabs();
      expect(tabs.length).to.equal(5);
      expect(tabs[0].heading).to.equal('Mein Tag');
      expect(tabs[1].heading).to.equal('E-Mail');
      expect(tabs[2].heading).to.equal('Kontakt');
      expect(tabs[3].heading).to.equal('Kalender');
      expect(tabs[4].heading).to.equal('Dateiablage');
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