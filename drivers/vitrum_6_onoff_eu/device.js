'use strict';

const Homey = require('homey');
const { ZwaveDevice } = require('homey-zwavedriver');


class Vitrum6OnOffDevice extends ZwaveDevice {
  /**
   * onInit is called when the device is initialized.
   */
  async onNodeInit() {
  
    if (this.node.isMultiChannelNode) {
      await this.addCapability('onoff');
    }
    else {
      await this.removeCapability('onoff');
    }

    this.registerCapability('onoff', 'BASIC');
    this.registerReportListener('BASIC', 'BASIC_SET', ( rawReport, parsedReport ) => {
      if(rawReport.Value == 0)
        this.setCapabilityValue('onoff', false);
      else
        this.setCapabilityValue('onoff', true);
    });   

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
