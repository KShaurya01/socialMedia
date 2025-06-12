import {useSharedValue, withSpring} from 'react-native-reanimated';

const useAnimatedValue = initialValue => {
  const animatedValue = useSharedValue(initialValue);

  const setAnimatedValue = value => {
    animatedValue.value = withSpring(value);
  };

  return [animatedValue, setAnimatedValue];
};

export default useAnimatedValue;
