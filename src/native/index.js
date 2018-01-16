import React from 'react'
import { AppRegistry, Text, View, StyleSheet } from 'react-native'
import App from '../common/App'

const RNApp = () => {
  const props = { Text, View, StyleSheet }
  return <App { ...props } />
}


AppRegistry.registerComponent('main', () => RNApp)
