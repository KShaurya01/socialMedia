import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Animated, {useAnimatedStyle, withSpring} from 'react-native-reanimated';

const CustomButton = ({title, onPress}) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: withSpring(1)}],
    };
  });

  return (
    <Animated.View style={[styles.button, animatedStyle]}>
      <TouchableOpacity onPress={onPress} style={styles.touchable}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6200EE',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  touchable: {
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
