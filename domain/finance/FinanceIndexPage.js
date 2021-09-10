'use strict';

const AbstractPage = require('../common/AbstractPage');

class FinanceIndexPage extends AbstractPage {

    async open() {
        await super.open('/');
    }

    getFutureCarouselBlock() {
        return $('div#YDC-Lead');
    }

}

module.exports = new FinanceIndexPage();
