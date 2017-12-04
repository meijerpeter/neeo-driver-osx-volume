# NEEO's Mac Volume Controller
Controls the volume of an Apple Mac via the NEEO remote controller

## Setup

1. Install NodeJS
2. Open Terminal and then:

`npm install -g meijerpeter/neeo-mac-volume-controller`
    
This installs the NodeJS module globally in `/usr/local/lib/node_modules/neeo-mac-volume-controller/` on your Mac.

3. To run the application, type:

`npm run start`
    
or:
 
`node /usr/local/lib/node_modules/neeo-mac-volume-controller/index.js`

or: 

`node neeo-mac-volume-controller`

### Installation

Usage of the Mac's LaunchAgent is recommended to keep the NodeJS server running. Create the following file in a text editor of choice and place it in `~/Library/LaunchAgents` and name it: `com.meijerpeter.neeomacvolumecontroller.plist`. 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>Label</key>
	<string>com.meijerpeter.neeomacvolumecontroller</string>
	<key>ProgramArguments</key>
	<array>
		<string>/usr/local/bin/node</string>
		<string>/usr/local/lib/node_modules/neeo-mac-volume-controller/index.js</string>
	</array>
	<key>RunAtLoad</key>
	<true/>
</dict>
</plist>
```

With every reboot or new login the NodeJS server will start the `neeo-mac-volume-controller` application
