import React from 'react'
import { AppRegistry, Text, View, StyleSheet } from 'react-native'
import HelloWorld from '../common/components/HelloWorld'
import PropTypes from 'prop-types'
import ContextInjector from '../common/utils/ContextInjector'

const WebApp = ContextInjector(
  { Text, View, StyleSheet },
  {
    View: PropTypes.func.isRequired,
    Text: PropTypes.func.isRequired,
    StyleSheet: PropTypes.object.isRequired,
  }
)

AppRegistry.registerComponent('WebApp', () => () => <WebApp><HelloWorld /></WebApp>);
AppRegistry.runApplication('WebApp', { rootTag: document.getElementById('app') });
