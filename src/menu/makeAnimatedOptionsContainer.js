module.exports = (React, ReactNative) => {
  const { Animated } = ReactNative;
  const TimerMixin = require('react-timer-mixin');

  // A component that scales in when mounted.
  const AnimatedOptionsContainer = React.createClass({
    mixins: [TimerMixin],
    getInitialState() {
      return { fadeAnim: new Animated.Value(0) };
    },
    componentDidMount() {
      this.setTimeout(() => {
        Animated.timing(this.state.fadeAnim, {
          duration: 60,
          toValue: 1
        }).start();
      }, 16);
    },
    render() {
      return (
        <Animated.View style={[this.props.style, {opacity: this.state.fadeAnim}]}>
          { this.props.children }
        </Animated.View>
      );
    }
  });

  return AnimatedOptionsContainer;
};