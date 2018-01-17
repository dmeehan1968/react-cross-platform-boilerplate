import React from 'react'
import { render, Text, View, StyleSheet } from 'react-sketchapp'
import Document from './components/Document'
import HelloWorld from '../common/HelloWorld'
import PropTypes from 'prop-types'
import ContextInjector from '../common/ContextInjector'

const RSApp = ContextInjector(
  {
    Text, View, StyleSheet
  },
  {
    View: PropTypes.func.isRequired,
    Text: PropTypes.func.isRequired,
    StyleSheet: PropTypes.object.isRequired,
  })

export default () => {

  render(
    <Document>
      <RSApp>
        <HelloWorld />
      </RSApp>
    </Document>,
      context.document.currentPage());

}
