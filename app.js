'use strict';

const Homey = require('homey');
const { Log } = require('homey-log');


class MyApp extends Homey.App {
	
	onInit() {
		this.homeyLog = new Log({ homey: this.homey });
		this.log('Vitrum V3 is running...');
		
	}
	
}

module.exports = MyApp;
