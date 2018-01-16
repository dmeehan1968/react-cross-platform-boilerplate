import React from 'react'
import PropTypes from 'prop-types'

export default class HelloWorld extends React.Component {

  constructor(props) {
    super(props)
    const { StyleSheet } = this.props

    this.styles = StyleSheet.create({
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

  render() {
    const { Text, View } = this.props
    const styles = this.styles

    return (
      <View name="HelloWorld" style={styles.helloWorld}>
        <Text name="message" style={styles.message}>Hello World</Text>
      </View>
    )
  }
}

HelloWorld.propTypes = {
  Text: PropTypes.func.isRequired,
  View: PropTypes.func.isRequired,
  StyleSheet: PropTypes.object.isRequired,
}
