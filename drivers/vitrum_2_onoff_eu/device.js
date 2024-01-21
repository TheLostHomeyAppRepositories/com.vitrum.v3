'use strict';

const { Device } = require('homey');
const { ZwaveDevice } = require('homey-zwavedriver');


class Vitrum2OnOffDevice extends ZwaveDevice {
  async onInit() {
      if (!this.hasCapability('onoff')){this.addCapability('onoff')};
  }

  /**
   * onNodeInit is called when the device is initialized.
   */
  async onNodeInit() {
    this.registerCapability('onoff', 'BASIC');
    this.log('Vitrum II OnOff EU has been initialized');
  }

  /**
   * onAdded is called when the user adds the device, called just after pairing.
   */
  async onAdded() {
    this.log('Vitrum II OnOff EU has been added');
  }

}

module.exports = Vitrum2OnOffDevice;
