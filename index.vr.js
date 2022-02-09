import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  View,
} from 'react-vr';
import Piano from './components/Piano';

export default class vr_piano extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('class.jpg')}/>
        <Piano />
      </View>
    );
  }
};

AppRegistry.registerComponent('vr_piano', () => vr_piano);
