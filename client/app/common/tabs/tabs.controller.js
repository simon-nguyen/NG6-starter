/**
 * We will use WeakMap to store the private fields.
 * Reason behind choosing WeakMap is, the entries of WeakMap that have
 * objects as keys are removed once the object is garbage collected.
 */
const INIT = new WeakMap();
const STATE = new WeakMap();


class TabsController {

	/**
	 * Inits the TabsController instance
	 * @param {Object} $state              UI-Router
	 * @param {Object} tabsProviderService Service
	 * @ngInject
	 */
	constructor($state, tabsProviderService) {
		this.name = 'tabs';

		STATE.set(this, $state);
		INIT.set(this, () => {
			this.tabs = tabsProviderService.getTabs();
		});

		INIT.get(this)();
	}

	selectTab(tab) {
		this.activeTab = tab;

		STATE.get(this).go(tab.ulink);
	}
}

/**
 * Apply dependency injection and register this class as a controller
 */
//TabsController.$inject = ['$state', 'tabsProviderService'];

export default TabsController;