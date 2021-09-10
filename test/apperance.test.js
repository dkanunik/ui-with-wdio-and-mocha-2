'use strict';

const FinanceIndexPage = require('../domain/finance/FinanceIndexPage');

describe('As a Yahoo Finance site user', function () {
    describe('I have to use', function () {
        before(async function () {
            await FinanceIndexPage.open();
        });

        it('Rates', async function () {
            await FinanceIndexPage.forwardUsingMainMenu('Personal Finance/Rates');
            await RatesPage.openTab('Investing');
        });

    });
});
