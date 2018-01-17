import React from 'react'
import PropTypes from 'prop-types'

export default class HelloWorld extends React.Component {

  static contextTypes = {
    View: PropTypes.func.isRequired,
    Text: PropTypes.func.isRequired,
    StyleSheet: PropTypes.object.isRequired,
  }

  get styles() {

    if (!this._styles) {
      const { StyleSheet } = this.context

      this._styles = StyleSheet.create({
        helloWorld: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        },
        message: {
          fontSize: 30
        }
      })
    }

    return this._styles
  }

  render() {
    const { Text, View } = this.context
    const styles = this.styles

    return (
      <View name="HelloWorld" style={styles.helloWorld}>
        <Text name="message" style={styles.message}>Hello World</Text>
      </View>
    )
  }
}