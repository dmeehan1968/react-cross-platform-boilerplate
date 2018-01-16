import React from 'react'
import { render, Text, View, StyleSheet } from 'react-sketchapp'
import Document from './components/Document'
import App from '../common/App'

const RSApp = () => {
  const props = { Text, View, StyleSheet }
  return <App { ...props } />
}

export default () => {

  render(<Document><RSApp /></Document>, context.document.currentPage());

}
