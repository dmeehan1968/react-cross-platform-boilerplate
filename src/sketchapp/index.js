import React from 'react'
import { render, Artboard } from 'react-sketchapp'
import App from './components/App'

const Document = () => (
  <Artboard style={{width: 800}}>
    <App />
  </Artboard>
)

export default () => {

  render(<Document />, context.document.currentPage());

}
