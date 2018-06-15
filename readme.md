This repository aims to test the use of pathMapping from chrome debugger.
Our work environment is organized by frameworks. Inside framework, we have modules containings web resources.

## Installation

    npm install

## Build
A build is emulated by just copy the modules inside the folder www.
    
    npm run build

## Start the server

    npm run start

## Launch the page with VSCode
Open this folder with VsCode if not done yet.

> You need to have ChromeDebugger extension.

Put a breakpoint on `fw2/moduleC/print.js` at line 3 for example.

Go to the debug view and launch the debug.

