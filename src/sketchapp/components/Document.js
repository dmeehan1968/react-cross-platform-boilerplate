import React from 'react'
import { Text, View, Artboard, StyleSheet } from 'react-sketchapp'

const devices = [
  { name: 'iPhone SE', width: 320, height: 568 },
  { name: 'iPhone 7', width: 375, height: 667 },
  { name: 'iPhone 7+', width: 414, height: 736 },
]

const vars = {
  documentPadding: 50,
  margin: 10
}

const documentWidth = devices.reduce((sum, device) => sum + (device.width + vars.margin), 0) + (vars.documentPadding * 2)

export default Document = ({ children }) => (

  <Artboard style={styles.artboard}>
    {devices.map(device => (
      <View name={device.name} key={device.name} >
        <Text name="title" style={styles.deviceTitle}>
          {device.name} ({device.width}x{device.height})
        </Text>
        <View name="content" style={[
          styles.component,
          {
            width: device.width,
            height: device.height,
          }
        ]}>
          {children}
        </View>
      </View>
    ))}
  </Artboard>
)

const styles = StyleSheet.create({
  artboard: {
    width: documentWidth,
    padding: vars.documentPadding,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  deviceTitle: {
    marginTop: vars.margin,
    marginBottom: vars.margin*2,
  },
  component: {
    borderWidth: 1,
    borderColor: 'red',
  }

})
