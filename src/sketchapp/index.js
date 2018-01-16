import React from 'react'
import { render, Text, View, StyleSheet } from 'react-sketchapp'
import Document from './components/Document'
import HelloWorld from '../common/HelloWorld'

const RSApp = () => {
  const props = { Text, View, StyleSheet }
  return <HelloWorld { ...props } />
}

export default () => {

  render(<Document><RSApp /></Document>, context.document.currentPage());

}
