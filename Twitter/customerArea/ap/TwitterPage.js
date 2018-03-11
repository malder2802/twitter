const BasePage = require('../BasePage');
const PersonalInfoPage = require('./PersonalInfoPage');
const ApBasePage = require('./ApBasePage');

class TwitterPage extends BasePage {
    constructor () {
        super();

        console.log('Twitter authentication page is displayed');
        this._username = 'Username field';
        this._password = 'Password field';
        this.authenticationButton = 'Authentication button';
    }

        /**
         *
         * @param {string} username
         * @param {string} password
         * @returns {PersonalInfoPage|exports|module.exports}
         */
        logIn(username, password) {
            this._fillTextField(username, this._username);
            this._fillTextField(password, this._password);
            this._clickElement(this.authenticationButton);

            return new PersonalInfoPage();
        }
}

module.exports = TwitterPage;
