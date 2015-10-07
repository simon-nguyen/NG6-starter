// const HTTP = new WeakMap();

let TabsProviderFactory = () => {

  let getTabs = () => {
    return [
      {
        ulink: 'home.meinTag',
        heading: 'Mein Tag',
        class: 'fa fa-bar-chart fa-2x'
			},
      {
        ulink: 'home.mail',
        heading: 'E-Mail',
        class: 'fa fa-usd fa-2x'
			},
      {
        ulink: 'home.kontakt',
        heading: 'Kontakt',
        class: 'fa fa-sitemap fa-2x'
			},
      {
        ulink: 'home.kalender',
        heading: 'Kalender',
        class: 'fa fa-user-secret fa-2x'
			},
      {
        ulink: 'home.dateiablage',
        heading: 'Dateiablage',
        class: 'fa fa-users fa-2x'
			}
		];
  }

  return {
    getTabs
  };
}

export default TabsProviderFactory;