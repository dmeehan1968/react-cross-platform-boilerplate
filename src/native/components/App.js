import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class App extends React.Component {

  render() {
    return (
      <View name="container" style={styles.container}>
        <Text style={styles.text}>Hello World</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30
  }
})
