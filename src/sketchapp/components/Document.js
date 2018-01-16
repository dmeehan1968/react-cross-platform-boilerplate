import React from 'react'
import { Text, View, Artboard } from 'react-sketchapp'

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

  <Artboard style={
    {
      width: documentWidth,
      padding: vars.documentPadding,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  }>
    {devices.map(device => (
      <View key={device.name} >
        <Text style={
          {
            marginTop: vars.margin,
            marginBottom: vars.margin*2,
          }
        }>{device.name} ({device.width}x{device.height})</Text>
        <View style={
          {
            width: device.width,
            height: device.height,
            borderWidth: 1,
            borderColor: 'red',
          }
        }>
          {children}
        </View>
      </View>
    ))}
  </Artboard>
)
