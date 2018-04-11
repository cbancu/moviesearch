import {Animated} from 'react-native';
import React, { Component } from 'react';
    
export default class FadeInView extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fadeAnim: new Animated.Value(-1),
      };
    }
  
    componentDidMount() {
      const { delay } = this.props;
  
      Animated.timing(this.state.fadeAnim, {
        toValue: 1,
        delay: delay,
        duration: 1500,
      })
      .start();
    }
  
    render() {
      return (
        <Animated.View
          style={{ opacity : this.state.fadeAnim }}>
          { this.props.children }
        </Animated.View>
     );
    }
   }
  
