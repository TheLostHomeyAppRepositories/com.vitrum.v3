'use strict';

const { Device } = require('homey');
const { ZwaveDevice } = require('homey-zwavedriver');

class Vitrum2EUShutterDevice extends ZwaveDevice {

  /**
   * onInit is called when the device is initialized.
   */
  async onNodeInit() {
   
    this.log('Vitrum II EU Roller Shutter has been initialized');

    this.registerCapability('windowcoverings_state', 'SWITCH_BINARY');
    this.registerCapabilityListener("windowcoverings_state", async (value, opts) => {
      this.log('value', value);
      this.log('opts', opts);

      let result;

      if (value === 'idle') {
        result = null;
      }
  
      if (value === 'up') {
        result = 1;
      }

      if (value === 'down') {
        result = 0;
      }
      else
        result = null;

      try {
        await this.node.CommandClass.COMMAND_CLASS_BASIC.BASIC_SET({"Value":result});
        return Promise.resolve();
      } catch (err) {
        return Promise.reject(err);
      }
  
    });
  }

  /**
   * onAdded is called when the user adds the device, called just after pairing.
   */
  async onAdded() {
    this.log('Vitrum II EU Roller Shutter has been added');
  }
}

module.exports = Vitrum2EUShutterDevice;
