const ApBasePage = require('./ApBasePage');
const TwitterPage = require('./TwitterPage');
const BasePage = require('../BasePage');

class PersonalInfoPage extends BasePage {
    constructor() {
        super();

        this._pageName = 'Personal Info';
        this._addHandlebutton = 'ADD HANDLE Button';
        this._successMessage = 'Success! Your Twitter and Namecheap accounts are now linked.';
        this._refreshButton = 'Refresh';
        this._statusMessage = 'Your accounts have been linked';
        this._pageIsDisplayed();
    }

    navigateToTwitter() {
        this._clickElement(this._addHandlebutton);
        return new TwitterPage();
    }
    getSuccessMessage() {
        return this._successMessage;
    }
    getStatusMessage() {
        return this._statusMessage;
    }
    getRefreshButton() {
        return this._refreshButton;
    }
}
module.exports = PersonalInfoPage;
