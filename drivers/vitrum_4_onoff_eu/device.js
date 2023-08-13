'use strict';

const Homey = require('homey');
const { ZwaveDevice } = require('homey-zwavedriver');

class Vitrum4OnOffDevice extends ZwaveDevice {

  /**
   * onNodeInit is called when the device is initialized.
   */
  async onNodeInit() {
    this.registerCapability('onoff', 'BASIC');


    this.log('Vitrum IV Device has been initialized');
  }

  /**
   * onAdded is called when the user adds the device, called just after pairing.
   */
  async onAdded() {
    this.log('Vitrum IV Device has been added');
  }

}

module.exports = MyDevice;
