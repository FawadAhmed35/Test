import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useNetworkStatus from '../../Hooks/useNetworkStatus';
import colors from '../../Utils/Theme';
import { widthPixel } from '../../Utils/Dimensions';

const NetworkBanner = () => {
  const isOnline = useNetworkStatus();

  return (
    <View
      style={[
        styles.banner,
        {backgroundColor: isOnline ? colors.green : colors.red},
      ]}>
      <Text style={styles.text}>{isOnline ? 'Online' : 'Offline'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    padding: "5%",
    marginBottom: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: widthPixel(20),
    overflow: 'hidden',
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default NetworkBanner;
