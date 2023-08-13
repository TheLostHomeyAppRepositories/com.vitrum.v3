'use strict';

const { Device } = require('homey');
const { ZwaveDevice } = require('homey-zwavedriver');


class Vitrum1OnOffDevice extends ZwaveDevice {

  /**
   * onInit is called when the device is initialized.
   */
  async onNodeInit() {

    this.registerCapability('onoff', 'BASIC');
    
    this.log('Vitrum I has been initialized');
  }

  /**
   * onAdded is called when the user adds the device, called just after pairing.
   */
  async onAdded() {
    this.log('Vitrum I Device has been added');
  }
}

module.exports = Vitrum1OnOffDevice;
