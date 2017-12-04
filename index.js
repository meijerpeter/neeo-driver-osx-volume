'use strict';

const neeoapi = require('neeo-sdk');
const controller = require('./controller');


console.log('NEEO SDK "Mac Volume" adapter');
console.log('------------------------------------------');

/*
 * Adapter - an Adapter contains one or more DEVICES. In this case we only use single volume device
 */

// first we set the device info, used to identify it on the Brain
const macVolume = neeoapi.buildDevice('Mac volume')
  .setManufacturer('Apple')
  .addAdditionalSearchToken('volume')
  .setType('ACCESSOIRE')

  // Then we add the capabilities of the device
  .addButtonGroup('VOLUME')
  .addButtonHandler(controller.onButtonPressed);

function startController(brain) {
  console.log('- Start server');
  neeoapi.startServer({
    brain,
    port: 6336,
    name: 'mac-volume-controller',
    devices: [macVolume]
  })
  .then(() => {
    console.log('# READY! use the NEEO app to search for "NEEO Accessory".');
  })
  .catch((error) => {
    //if there was any error, print message out to console
    console.error('ERROR!', error.message);
    process.exit(1);
  });
}

//START Brain discovery
const brainIp = process.env.BRAINIP;
if (brainIp) {
  console.log('- use NEEO Brain IP from env variable', brainIp);
  startController(brainIp);
} else {
  console.log('- discover one NEEO Brain...');
  neeoapi.discoverOneBrain()
    .then((brain) => {
      console.log('- Brain discovered:', brain.name);
      startController(brain);
    });
}
