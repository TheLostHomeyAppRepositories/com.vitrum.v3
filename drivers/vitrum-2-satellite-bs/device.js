'use strict';

const { Device } = require('homey');
const { ZwaveDevice } = require('homey-zwavedriver');


class Vitrum2BSSatDevice extends ZwaveDevice {

  async onNodeInit() {

    this.registerCapability('onoff', 'BASIC');

    this.log('Vitrum II Sat BS has been initialized');
  }

  /**
   * onAdded is called when the user adds the device, called just after pairing.
   */
  async onAdded() {
    this.log('Vitrum II Sat BS has been added');
  }

}

module.exports = Vitrum2BSSatDevice;