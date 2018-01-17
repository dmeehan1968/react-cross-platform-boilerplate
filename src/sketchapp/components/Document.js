import React from 'react'
import { Text, View, Artboard, StyleSheet } from 'react-sketchapp'
import PropTypes from 'prop-types'

const vars = {
  documentPadding: 50,
  margin: 10
}

class Device extends React.Component {

  get styles() {

    return this._styles || (this._styles = StyleSheet.create({
      container: {
        marginRight: 20
      },
      title: {
        marginTop: vars.margin,
        marginBottom: vars.margin*2,
        fontSize: 20
      },
      content: {
        backgroundColor: 'white'
      }
    }))

  }

  render() {
    const title = `${this.props.name} (${this.props.width}x${this.props.height})`

    return (
      <View name={this.props.name} style={this.styles.container} >
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

export default class Document extends React.Component {

  static propTypes = {
    devices: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
      }).isRequired,
    ).isRequired,
    components: PropTypes.arrayOf(
      PropTypes.func.isRequired,
    ).isRequired,
  }

  get styles() {

    return this._styles || (this._styles = StyleSheet.create({
      artboard: {
        backgroundColor: '#ddd'
      },
      container: {
        padding: vars.documentPadding,
      },
      component: {
        flexDirection: 'row',
      },
      title: {
        fontSize: 50,
        marginBottom: vars.margin*2
      }
    }))
  }

  renderComponent(Component, index) {
    return (
      <View style={this.styles.container} key={index}>
        <Text style={this.styles.title}>{Component.name}</Text>
        <View name="Component" style={this.styles.component}>
          {this.props.devices.map(device => this.renderDevice(device, Component))}
        </View>
      </View>
    )
  }

  renderDevice(device, Component) {
    return (
      <Device
        key={device.name}
        {...device}
      >
        <Component />
      </Device>
    )
  }

  render() {

    return (
      <Artboard style={this.styles.artboard}>
        {this.props.components.map(::this.renderComponent)}
      </Artboard>
    )
  }
}
