'use strict';

const { Device } = require('homey');
const { ZwaveDevice } = require('homey-zwavedriver');


class Vitrum3OnOffDevice extends ZwaveDevice {

  /**
   * onNodeInit is called when the device is initialized.
   */
  async onNodeInit() {
    
    this.registerCapability('onoff', 'BASIC');
    this.log('Vitrum III has been initialized');
  }

  /**
   * onAdded is called when the user adds the device, called just after pairing.
   */
  async onAdded() {
    this.log('Vitrum III has been added');
  }

  /**
   * onSettings is called when the user updates the device's settings.
   * @param {object} event the onSettings event data
   * @param {object} event.oldSettings The old settings object
   * @param {object} event.newSettings The new settings object
   * @param {string[]} event.changedKeys An array of keys changed since the previous version
   * @returns {Promise<string|void>} return a custom message that will be displayed
   */
  async onSettings({ oldSettings, newSettings, changedKeys }) {
    this.log('Vitrum III settings where changed');
 /*   this.Vitrum3OnOffDevice.configurationSet()

    const keys = Object.keys(newSettings);
    keys.forEach((key, index) => {
      this.log(`${key}: ${newSettings[key]}`);
    });

    this.configurationSet({
      `index: ${key}`,
      size: 1,
      id: 'led_ring_color_on',
    }, new Buffer([args.color]));
    */
  }

  /**
   * onRenamed is called when the user updates the device's name.
   * This method can be used this to synchronise the name to the device.
   * @param {string} name The new name
   */
  async onRenamed(name) {
    this.log('Vitrum III Device was renamed');
  }

  /**
   * onDeleted is called when the user deleted the device.
   */
  async onDeleted() {
    this.log('Vitrum III Device has been deleted');
  }

}

module.exports = Vitrum3OnOffDevice;
