'use strict';

const { Device } = require('homey');

class Vitrum2EUShutterDevice extends Device {

  /**
   * onInit is called when the device is initialized.
   */
  async onNodeInit() {
   
    this.log('Vitrum II EU Roller Shutter has been initialized');
    // Register Z-Wave capabilities for controlling roller shutter
    this.registerCapability(‘windowcoverings_state’, ‘SWITCH_MULTILEVEL’, {
    getOpts: {
      getOnStart: true,
      pollInterval: 10000 // Adjust poll interval as per your requirement
    },
    reportParser: report => {
        if (report && report.hasOwnProperty(‘Value’)) {
          return report.Value === ‘up’ ? 99 : (report.Value === ‘down’ ? 0 : 50);
        }
        return null;
      }
    });

    this.registerCapability(‘windowcoverings_set’, ‘SWITCH_MULTILEVEL’, {
    reportParser: value => {
      if (value === 0) return ‘down’;
      if (value === 99) return ‘up’;
      return ‘idle’;
      },
      reportParserOverride: true
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
