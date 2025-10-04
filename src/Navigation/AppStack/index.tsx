import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import icons from '../../Assets/Icons';
import Detail from '../../Screens/App/Detail';
import Home from '../../Screens/App/Home';
import { widthPixel } from '../../Utils/Dimensions';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'Home',
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({navigation}) => ({
          headerTitle: 'Detail',
          headerLeft: () => (
            <TouchableOpacity
              hitSlop={25}
              style={{marginLeft: widthPixel(25)}}
              onPress={() => navigation.goBack()}>
              <Image
                source={icons.goback}
                style={{
                  width: widthPixel(25),
                  height: widthPixel(25),
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
