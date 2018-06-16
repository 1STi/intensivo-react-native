/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {View} from 'react-native'

import Hello from './helloScreen';
import Treinamento from './treinamento';

export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Hello />
        <Treinamento />
      </View>
    );
  }
}
