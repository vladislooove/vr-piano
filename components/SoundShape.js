import React from 'react';
import {
  VrButton,
  Animated,
  Sound,
} from 'react-vr';

export default class SoundShape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
    };
  }

  animate = () => {
    this.props.onClick();

    Animated.spring(  
      this.state.bounceValue, 
      {
        toValue: -1, 
        duration: 50, 
      }
    ).start();

    setTimeout(() => {
      Animated.timing(
        this.state.bounceValue,
        {
          toValue: 0,
          duration: 50,
        }
      ).start();  
    }, 100);
  }

  render() {
    return (
      <Animated.View
        style={{
          transform: [
            {rotateX: this.state.bounceValue},
          ],
        }}
      >
        <VrButton onClick={this.animate}>
          {this.props.children}
        </VrButton>
        <Sound playerState={this.props.playerState} source={this.props.sound} />
      </Animated.View>
    );
  }
};
