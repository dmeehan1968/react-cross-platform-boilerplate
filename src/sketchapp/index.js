import React from 'react'
import PropTypes from 'prop-types'
import { render, Text, View, StyleSheet } from 'react-sketchapp'

import Document from './components/Document'
import HelloWorld, { ContextTypes as HelloWorldContextTypes } from '../common/components/HelloWorld'
import contextProvider from '../common/utils/contextProvider'

const RSApp = contextProvider({ Text, View, StyleSheet }, HelloWorldContextTypes)

export default () => {

  const devices = [
    { name: 'iPhone SE', width: 320, height: 568 },
    { name: 'iPhone 7', width: 375, height: 667 },
    { name: 'iPhone 7+', width: 414, height: 736 },
    { name: 'Small Desktop', width: 800, height: 600 }
  ]

  render(
    <RSApp>
      <Document
        devices={devices}
        components={[HelloWorld]}
      />
    </RSApp>,
    context.document.currentPage());

}
