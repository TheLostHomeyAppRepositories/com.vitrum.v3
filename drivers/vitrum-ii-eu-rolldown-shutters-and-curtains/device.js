'use strict';

const { Device } = require('homey');

class Vitrum2EUShutterDevice extends Device {

  /**
   * onInit is called when the device is initialized.
   */
  async onNodeInit() {
   
    this.log('Vitrum II EU Roller Shutter has been initialized');
    // Register Z-Wave capabilities for controlling roller shutter
    if (this.hasCapability('windowcoverings_set')) {
      this.registerCapability('windowcoverings_set', 'SWITCH_MULTILEVEL');
    } else if (this.hasCapability('dim')) {
      this.registerCapability('dim', 'SWITCH_MULTILEVEL');
    }
  }

  /**
   * onAdded is called when the user adds the device, called just after pairing.
   */
  async onAdded() {
    this.log('Vitrum II EU Roller Shutter has been added');
  }
}

module.exports = Vitrum2EUShutterDevice;
