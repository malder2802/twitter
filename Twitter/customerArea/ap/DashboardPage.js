const ApBasePage = require('./ApBasePage');
const LeftPanel = require('../partials/LeftPanel');

class DashboardPage extends ApBasePage {
  constructor() {
    super();
    this._pageName = 'Dashboard';
    this.leftpanel = new LeftPanel();
    this._pageIsDisplayed();
  }

}

module.exports = DashboardPage;
