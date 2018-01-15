import React from 'react'
import { render } from 'react-sketchapp'
import Document from './components/Document'

export default () => {

  render(<Document />, context.document.currentPage());

}
