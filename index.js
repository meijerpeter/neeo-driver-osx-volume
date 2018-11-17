'use strict';

const neeoapi = require('neeo-sdk');
const VolumeController = require('./lib/controller');

const controller = VolumeController.build();

console.log('NEEO SDK "Mac Volume" adapter');
/*
 * Adapter - an Adapter contains one or more DEVICES. In this case we only use single volume device
 */

// first we set the device info, used to identify it on the Brain
const macVolume = neeoapi.buildDevice('Mac Volume 1.1')
  .setManufacturer('Apple')
  .addAdditionalSearchToken('volume')
  .setType('ACCESSOIRE')

  // Then we add the capabilities of the device
  .addButtonGroup('VOLUME')
  .addButtonHandler(controller.onButtonPressed);

module.exports = {
  devices: [macVolume]
};
