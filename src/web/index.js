import React from 'react'
import { AppRegistry, Text, View, StyleSheet } from 'react-native'
import HelloWorld from '../common/HelloWorld'

const WebApp = () => {
  const props = { Text, View, StyleSheet }
  return <HelloWorld { ...props } />
}

AppRegistry.registerComponent('WebApp', () => WebApp);
AppRegistry.runApplication('WebApp', { rootTag: document.getElementById('app') });
