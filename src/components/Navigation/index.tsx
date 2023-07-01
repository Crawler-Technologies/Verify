import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import BottomNavigator from './BottomTabNavigator';
import AttendanceDetailsScreen from '../../screens/AttendanceDetailsScreen';

const Stack = createStackNavigator();

const Navigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="main" component={BottomNavigator} />
        <Stack.Screen name="AttendanceDetails" component={AttendanceDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
