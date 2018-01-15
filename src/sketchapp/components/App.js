import React from 'react'
import { Text, View, StyleSheet } from 'react-sketchapp'

export default class App extends React.Component {

  render() {
    return (
      <View style={StyleSheet.flatten(styles.container)}>
        <Text>Hello World</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
