import {AppRegistry} from 'react-native'
import  Root from './components/Root'

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <Root />
    )
  }
}



AppRegistry.registerComponent('MoviesLookup', () => Root); 