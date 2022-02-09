import React from 'react';
import {
  asset,
  MediaPlayerState,
  Box,
  SpotLight,
  View,
} from 'react-vr';
import SoundShape from './SoundShape';

export default class Piano extends React.Component {
  constructor(props) {
    super(props);
    this.KEYS_CONFIG = [
      {
        sound: asset('piano-samples/A0.mp3'),
        playerState: new MediaPlayerState({}),
      }
    ];
    
  }

  render() {
    return (
      <View>
        {this.KEYS_CONFIG.map((item, index) => (
          <View key={index}>
            <SpotLight intensity={1} style={{transform: [{translate: [1, 4, 4]}],}} />
            <SoundShape
              onClick={() => item.playerState.play()}
              sound={item.sound}
              playerState={item.playerState}
            >
              <Box
                dimWidth={0.4}
                dimDepth={0.2}
                dimHeight={0.2}
                lit={true}
                style={{
                  color: '#fff',
                  transform: [{translate: [0,-0.5,-2]}, {rotateX: 30}],
                }}
              />
            </SoundShape>
          </View>
        ))}
      </View>
    );
  }
}