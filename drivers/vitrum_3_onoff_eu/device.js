'use strict';

const Homey = require('homey');
const { ZwaveDevice } = require('homey-zwavedriver');


class Vitrum3OnOffDevice extends ZwaveDevice {

  /**
   * onInit is called when the device is initialized.
   */
  async onNodeInit() {

    this.registerCapability('onoff', 'BASIC');
    this.registerReportListener('BASIC', 'BASIC_SET', ( rawReport, parsedReport ) => {
      if(rawReport.Value == 0)
        this.setCapabilityValue('onoff', false);
      else
        this.setCapabilityValue('onoff', true);
    });

    this.log('Vitrum3OnOffDevice has been initialized');
  }

  /**
   * onAdded is called when the user adds the device, called just after pairing.
   */
  async onAdded() {
    this.log('Vitrum3OnOffDevice has been added');
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
    this.log('Vitrum3OnOffDevice settings where changed');
  }

  /**
   * onRenamed is called when the user updates the device's name.
   * This method can be used this to synchronise the name to the device.
   * @param {string} name The new name
   */
  async onRenamed(name) {
    this.log('Vitrum3OnOffDevice was renamed');
  }

  /**
   * onDeleted is called when the user deleted the device.
   */
  async onDeleted() {
    this.log('Vitrum3OnOffDevice has been deleted');
  }

}

module.exports = Vitrum3OnOffDevice;
