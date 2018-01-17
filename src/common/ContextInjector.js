import React from 'react'

export default (context, contextTypes) => {

  return class extends React.Component {

    getChildContext() {
      return context
    }

    static childContextTypes = contextTypes

    render() {
      return this.props.children
    }
  }
}
