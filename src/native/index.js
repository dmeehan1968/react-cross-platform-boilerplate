import React from 'react'
import { AppRegistry, Text, View, StyleSheet } from 'react-native'
import HelloWorld from '../common/HelloWorld'
import PropTypes from 'prop-types'
import ContextInjector from '../common/ContextInjector'

const RNApp = ContextInjector(
  { Text, View, StyleSheet },
  {
    View: PropTypes.func.isRequired,
    Text: PropTypes.func.isRequired,
    StyleSheet: PropTypes.object.isRequired,
  }
)

AppRegistry.registerComponent('main', () => () => <RNApp><HelloWorld /></RNApp>)
