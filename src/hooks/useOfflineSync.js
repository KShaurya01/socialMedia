import {useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';

const useOfflineSync = syncData => {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected) {
        syncData();
      }
    });

    return () => unsubscribe();
  }, [syncData]);
};

export default useOfflineSync;
