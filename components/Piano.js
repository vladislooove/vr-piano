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
        sound: asset('piano-samples/C1.mp3'),
        playerState: new MediaPlayerState({}),
      }, {
        sound: asset('piano-samples/Db1.mp3'),
        playerState: new MediaPlayerState({}),
        isIntermediateNote: true,
      }, {
        sound: asset('piano-samples/D1.mp3'),
        playerState: new MediaPlayerState({}),
      }, {
        sound: asset('piano-samples/Eb1.mp3'),
        playerState: new MediaPlayerState({}),
        isIntermediateNote: true,
      }, {
        sound: asset('piano-samples/E1.mp3'),
        playerState: new MediaPlayerState({}),
      }, {
        sound: asset('piano-samples/F1.mp3'),
        playerState: new MediaPlayerState({}),
      }, {
        sound: asset('piano-samples/Gb1.mp3'),
        playerState: new MediaPlayerState({}),
        isIntermediateNote: true,
      }, {
        sound: asset('piano-samples/G1.mp3'),
        playerState: new MediaPlayerState({}),
      }, {
        sound: asset('piano-samples/Ab1.mp3'),
        playerState: new MediaPlayerState({}),
        isIntermediateNote: true,
      }, {
        sound: asset('piano-samples/A1.mp3'),
        playerState: new MediaPlayerState({}),
      }, {
        sound: asset('piano-samples/Bb1.mp3'),
        playerState: new MediaPlayerState({}),
        isIntermediateNote: true,
      }, {
        sound: asset('piano-samples/B1.mp3'),
        playerState: new MediaPlayerState({}),
      }, {
        sound: asset('piano-samples/C2.mp3'),
        playerState: new MediaPlayerState({}),
      }, {
        sound: asset('piano-samples/Db2.mp3'),
        playerState: new MediaPlayerState({}),
        isIntermediateNote: true,
      }, {
        sound: asset('piano-samples/D2.mp3'),
        playerState: new MediaPlayerState({}),
      }, {
        sound: asset('piano-samples/Eb2.mp3'),
        playerState: new MediaPlayerState({}),
        isIntermediateNote: true,
      }, {
        sound: asset('piano-samples/E2.mp3'),
        playerState: new MediaPlayerState({}),
      }, {
        sound: asset('piano-samples/F2.mp3'),
        playerState: new MediaPlayerState({}),
      }, {
        sound: asset('piano-samples/Gb2.mp3'),
        playerState: new MediaPlayerState({}),
        isIntermediateNote: true,
      }, {
        sound: asset('piano-samples/G2.mp3'),
        playerState: new MediaPlayerState({}),
      }, {
        sound: asset('piano-samples/Ab2.mp3'),
        playerState: new MediaPlayerState({}),
        isIntermediateNote: true,
      }, {
        sound: asset('piano-samples/A2.mp3'),
        playerState: new MediaPlayerState({}),
      }, {
        sound: asset('piano-samples/Bb2.mp3'),
        playerState: new MediaPlayerState({}),
        isIntermediateNote: true,
      }, {
        sound: asset('piano-samples/B2.mp3'),
        playerState: new MediaPlayerState({}),
      }, {
        sound: asset('piano-samples/C3.mp3'),
        playerState: new MediaPlayerState({}),
      }, {
        sound: asset('piano-samples/Db3.mp3'),
        playerState: new MediaPlayerState({}),
        isIntermediateNote: true,
      }, {
        sound: asset('piano-samples/D3.mp3'),
        playerState: new MediaPlayerState({}),
      }, {
        sound: asset('piano-samples/Eb3.mp3'),
        playerState: new MediaPlayerState({}),
        isIntermediateNote: true,
      }, {
        sound: asset('piano-samples/E3.mp3'),
        playerState: new MediaPlayerState({}),
      }, {
        sound: asset('piano-samples/F3.mp3'),
        playerState: new MediaPlayerState({}),
      }, {
        sound: asset('piano-samples/Gb3.mp3'),
        playerState: new MediaPlayerState({}),
        isIntermediateNote: true,
      }, {
        sound: asset('piano-samples/G3.mp3'),
        playerState: new MediaPlayerState({}),
      }, {
        sound: asset('piano-samples/Ab3.mp3'),
        playerState: new MediaPlayerState({}),
        isIntermediateNote: true,
      }, {
        sound: asset('piano-samples/A3.mp3'),
        playerState: new MediaPlayerState({}),
      }, {
        sound: asset('piano-samples/Bb3.mp3'),
        playerState: new MediaPlayerState({}),
        isIntermediateNote: true,
      }, {
        sound: asset('piano-samples/B3.mp3'),
        playerState: new MediaPlayerState({}),
      }
    ];
    
  }

  onClick = (player) => {
    player.play();
  }

  render() {
    return (
      <View>
        {this.KEYS_CONFIG.map((item, index, array) => {
          const isPrevNoteIntermediate = array[index - 1] && array[index - 1].isIntermediateNote;
          const emptySpaceBeforeCurrent = array.slice(0, index).filter(({ isIntermediateNote }) => isIntermediateNote).length;
          const keyIndex = index - emptySpaceBeforeCurrent;

          return (
            <View key={index}>
              <SpotLight intensity={1} style={{transform: [{translate: [1, 4, 4]}],}} />
              <SoundShape
                onClick={() => this.onClick(item.playerState)}
                sound={item.sound}
                playerState={item.playerState}
              >
                <Box
                  dimWidth={0.13}
                  dimDepth={item.isIntermediateNote ? 0.5 : 1}
                  dimHeight={0.18}
                  lit={true}
                  style={{
                    color: item.isIntermediateNote ? '#000' : '#fff',
                    transform: [{
                      translate: [
                        -2 + (
                          item.isIntermediateNote
                          ? (0.135 * (isPrevNoteIntermediate ? keyIndex - 1 : keyIndex) - 0.06) 
                          : (0.135 * (isPrevNoteIntermediate ? keyIndex - 1 : keyIndex))
                        ),
                        item.isIntermediateNote ? -0.45 : -0.5,
                        item.isIntermediateNote ? -2.3 : -2,
                      ],
                    }],
                  }}
                />
              </SoundShape>
            </View>
          );
        })}
      </View>
    );
  }
}