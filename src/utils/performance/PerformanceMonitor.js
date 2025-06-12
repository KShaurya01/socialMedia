import {useEffect} from 'react';
import {AppState} from 'react-native';

const PerformanceMonitor = () => {
  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );
    return () => subscription.remove();
  }, []);

  const handleAppStateChange = nextAppState => {
    if (nextAppState === 'active') {
      console.log('App has come to the foreground!');
      // Add performance tracking logic here
    }
  };

  return null;
};

export default PerformanceMonitor;
