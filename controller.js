'use strict';

const applescript = require('applescript');

const VOLUME_UP = "VOLUME UP";
const VOLUME_DOWN = "VOLUME DOWN";
const MUTE_TOGGLE = "MUTE TOGGLE";

/*
 * Device Controller
 * Events on that device from the Brain will be forwarded here for handling.
 */
module.exports.onButtonPressed = function onButtonPressed(action, deviceId) {
  console.log(`[CONTROLLER] ${action} button pressed for device ${deviceId}`);

  var script = "";
  switch (action) {
    case VOLUME_UP:
      console.log(`Volume up on ${deviceId}`);
      script = "set volume output volume ((output volume of (get volume settings)) + 10)";
      executeScript(script);
      break;
    case VOLUME_DOWN:
      console.log(`Volume down off on ${deviceId}`);
      script = "set volume output volume ((output volume of (get volume settings)) - 10)";
      executeScript(script);
      break;
    case MUTE_TOGGLE:
      console.log(`Mute on/off on on ${deviceId}`);
      script = "" +
      "set curVolume to get volume settings \n" +
      "if output muted of curVolume is false then\n" +
      "set volume with output muted\n" +
      "else\n" +
      "set volume without output muted\n" +
      "end if";
      executeScript(script);
      break;
    default:
      console.log(`Unsupported button: ${action} for ${deviceId}`);
      return Promise.resolve(false);
  }

};

function executeScript(script) {
  //console.log("Executing script: " + script);

  applescript.execString(script, function(err, rtn) {
    if (err) {
      console.log(err);
    }
  });

}
