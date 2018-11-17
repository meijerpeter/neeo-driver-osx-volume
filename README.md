# NEEO's Mac Volume Controller
Controls the volume of an Apple Mac via the NEEO remote controller.

## Setup

1. Follow the instruction of the @neeo/cli module: https://github.com/NEEOInc/neeo-sdk-toolkit/tree/master/cli

2. Open Terminal and then:

`npm install neeo-driver-osx-volume`

This installs the NodeJS module on your Mac.

3. To run the application, type:

`npx neeo-cli start`


### Installation

1. Create a file in the root of the neeo-server with execution rights (chmod +x filename) with the following:

```
#!/bin/bash

cd /usr/local/lib
npx neeo-cli start
```

2. Usage of the Mac's LaunchAgent is recommended to keep the NodeJS server running. Create the following file in a text editor of choice and place it in `~/Library/LaunchAgents` and name it: `com.neeo.server.plist`.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>Label</key>
	<string>com.neeo.server</string>
	<key>ProgramArguments</key>
	<array>
		<string>/usr/local/lib/neeo-server/neeo-server-startup</string>
	</array>
	<key>RunAtLoad</key>
	<true/>
</dict>
</plist>
```

With every reboot or new login the NodeJS server will start the drivers in the neeo-server directory.
