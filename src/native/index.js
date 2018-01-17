import React from 'react'
import PropTypes from 'prop-types'
import { AppRegistry, Text, View, StyleSheet } from 'react-native'

import HelloWorld, { ContextTypes as HelloWorldContextTypes } from '../common/components/HelloWorld'
import contextProvider from '../common/utils/contextProvider'

const RNApp = contextProvider({ Text, View, StyleSheet }, HelloWorldContextTypes)

AppRegistry.registerComponent('main', () => () => <RNApp><HelloWorld /></RNApp>)
