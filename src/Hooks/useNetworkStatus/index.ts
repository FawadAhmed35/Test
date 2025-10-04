import NetInfo from '@react-native-community/netinfo';
import { useEffect, useState } from 'react';

const useNetworkStatus = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsOnline(!!state.isConnected && (state.isInternetReachable ?? false));
        });

        return () => unsubscribe();
    }, []);

    return isOnline;
};

export default useNetworkStatus;
