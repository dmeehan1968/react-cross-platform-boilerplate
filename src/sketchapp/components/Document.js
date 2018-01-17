import React from 'react'
import { Text, View, Artboard, StyleSheet } from 'react-sketchapp'

const devices = [
  { name: 'iPhone SE', width: 320, height: 568 },
  { name: 'iPhone 7', width: 375, height: 667 },
  { name: 'iPhone 7+', width: 414, height: 736 },
  { name: 'Small Desktop', width: 800, height: 600 }
]

const vars = {
  documentPadding: 50,
  margin: 10
}

const documentWidth = devices.reduce((sum, device) => sum + (device.width + vars.margin), 0) + (vars.documentPadding * 2)

class Device extends React.Component {

  constructor(props) {
    super(props)
    this.styles = StyleSheet.create({
      title: {
        marginTop: vars.margin,
        marginBottom: vars.margin*2,
        fontSize: 20
      },
      content: {
        borderWidth: 1,
        borderColor: 'red',
      }
    })
  }

  render() {
    const title = `${this.props.name} (${this.props.width}x${this.props.height})`

    return (
      <View name={this.props.name} >
        <Text name="title" style={this.styles.title}>
          {title}
        </Text>
        <View name="content" style={[
          this.styles.content,
          {
            width: this.props.width,
            height: this.props.height,
          }
        ]}>
          {this.props.children}
        </View>
      </View>

    )
  }
}

export default Document = ({ children }) => (

  <Artboard style={styles.artboard}>
    {devices.map(device => (
      <Device
        key={device.name}
        {...device}
      >
        {children}
      </Device>
    ))}
  </Artboard>
)

const styles = StyleSheet.create({
  artboard: {
    width: documentWidth,
    padding: vars.documentPadding,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
