'use strict';

const { Device } = require('homey');
const { ZwaveDevice } = require('homey-zwavedriver');


class Vitrum2BSSatDevice extends ZwaveDevice {
  async onInit() {
    if (!this.hasCapability('onoff')){this.addCapability('onoff')};
  }

  async onNodeInit() {

    this.registerCapability('onoff', 'BASIC');
    this.registerReportListener('BASIC', 'BASIC_SET', ( rawReport, parsedReport ) => {
      if(rawReport.Value == 0)
        this.setCapabilityValue('onoff', false);
      else
        this.setCapabilityValue('onoff', true);
    });
    
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