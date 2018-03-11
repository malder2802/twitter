const HomePage = require('../Twitter/customerArea/cms/HomePage');
const testData = require('../Twitter/customerArea/test.data');
const DashboardPage = require('../Twitter/customerArea/ap/DashboardPage');
const TwitterPage = require('../Twitter/customerArea/ap/TwitterPage');
const PersonalInfoPage = require('../Twitter/customerArea/ap/PersonalInfoPage');

fdescribe('Personal Info page.', () => {
    let homePage;

    beforeAll(() => homePage = HomePage.visit());

    it(`Twitter account can be linked`, () => {
        const personalInfoPage =
            homePage
                .header.signIn(testData.NC_username, testData.NC_password)
                .leftpanel.navigateToProfile()
                .navigateToTwitter()
                .logIn(testData.Twitter_username, testData.Twitter_password);

        expect(personalInfoPage.getSuccessMessage())
            .toBe(`Success! Your Twitter and Namecheap accounts are now linked.`);
        expect(personalInfoPage.getStatusMessage())
            .toBe(`Your accounts have been linked`);
        expect(personalInfoPage.getRefreshButton())
            .toBe(`Refresh`);
    });
});
