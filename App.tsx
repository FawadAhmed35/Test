import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import MainNavigation from './src/Navigation/MainNavigation';
import { persistor, store } from './src/Redux/Store';
import { navigationRef } from './src/Utils/Navigate';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={styles.app}>
          <NavigationContainer ref={navigationRef}>
            <StatusBar
              translucent
              barStyle={'dark-content'}
              backgroundColor={'transparent'}
            />
            <MainNavigation />
            <Toast />
          </NavigationContainer>
        </View>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
