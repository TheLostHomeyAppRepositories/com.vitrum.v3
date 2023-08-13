'use strict';

const Homey = require('homey');
const { ZwaveDevice } = require('homey-zwavedriver');


class Vitrum6OnOffDevice extends ZwaveDevice {

  /**
   * onInit is called when the device is initialized.
   */
  async onNodeInit() {

    this.registerCapability('onoff', 'BASIC');

    this.log('Vitrum VI Device has been initialized');
  }

  /**
   * onAdded is called when the user adds the device, called just after pairing.
   */
  async onAdded() {
    this.log('Vitrum VI Device has been added');
  }

}

module.exports = MyDevice;
