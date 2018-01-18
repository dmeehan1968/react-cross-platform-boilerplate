react-cross-platform-boilerplate
================================

Motivation
----------

To provide a starting point for React (web), React Native (iOS & Android)
and React Sketchapp development and testing.

Methodology
-----------

Defines an entry point for each platform, and uses React Context to
disambiguate platform specific components (entry point is responsible for
populating the context with platform specific components, e.g. Text, View,
StyleSheet, etc.)

* src
  * common
    * components
    * utils
  * native
    * index.js
  * sketchapp
    * index.js
    * manifest.json
  * web
    * .babelrc
    * index.html
    * index.js
    * webpack.config.babel.js

Todo
------

* Add Jest for testing

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
