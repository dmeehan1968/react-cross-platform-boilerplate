import React from 'react'
import { AppRegistry, Text, View, StyleSheet } from 'react-native'
import HelloWorld from '../common/HelloWorld'

const RNApp = () => {
  const props = { Text, View, StyleSheet }
  return <HelloWorld { ...props } />
}


AppRegistry.registerComponent('main', () => RNApp)
