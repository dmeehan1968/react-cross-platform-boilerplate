import React from 'react'
import PropTypes from 'prop-types'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    const { StyleSheet } = this.props

    this.styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      text: {
        fontSize: 30
      }
    })
  }

  render() {
    const { Text, View } = this.props
    const styles = this.styles

    return (
      <View name="container" style={styles.container}>
        <Text style={styles.text}>Hello World</Text>
      </View>
    )
  }
}

App.propTypes = {
  Text: PropTypes.func.isRequired,
  View: PropTypes.func.isRequired,
  StyleSheet: PropTypes.object.isRequired,
}
