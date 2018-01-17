react-cross-platform-boilerplate
================================

Install
-------

WARNING: This package contains a fork of react-sketchapp which doesn't have a
postinstall step to produce its build artefacts when being installed from a
github repo (rather than npm).  You will need to manually switch to the
node_modules/react-sketchapp directory and build, as detailed below.

```
npm clone git@github:dmeehan1968/react-cross-platform-boilerplate
cd node_modules/react-sketchapp
npm install
npm run prepublishOnly
