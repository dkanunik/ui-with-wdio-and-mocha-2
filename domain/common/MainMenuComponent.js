'use strict';

const AbstractComponent = require('./AbstractComponent');

class MainMenuComponent extends AbstractComponent {

    async followByPath(path) {
        const itemsArr = path.split('/');
        const menuElement = await $(`//a[@title='${itemsArr[0]}']`);
        await menuElement.waitForDisplayed();
        await menuElement.moveTo();

        const subMenuElement = await $(`//a[@title='${itemsArr[1]}']`);
        await subMenuElement.waitForDisplayed();
        await subMenuElement.waitForClickable();
        await subMenuElement.moveTo();
        await subMenuElement.click();
    }

}

module.exports = MainMenuComponent;
