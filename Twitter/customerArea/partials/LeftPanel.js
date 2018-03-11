const BasePage = require('../BasePage');
const PersonalInfoPage = require('../ap/PersonalInfoPage');

class LeftPanel extends BasePage {
    constructor() {
        super();

        this._profileButton = 'Profile Button';
    }

    navigateToProfile() {
        this._clickElement(this._profileButton);

        return new PersonalInfoPage();
    }

}

module.exports = LeftPanel;
/**
 * Created by malde on 17.02.2018.
 */
