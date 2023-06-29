import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import colors from '../../theme/colors';
import {weight, size} from '../../theme/fonts';

import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import NotificationScreen from '../../screens/NotificaitonScreen';
import ProfileScreen from '../../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.inActive,
        tabBarIconStyle: styles.tabIcon,
        tabBarStyle: styles.container,
      }}>
      <Tab.Screen
        name="Attendance"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="create-outline" size={size} color={color} />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={[
                styles.tabLabel,
                {
                  color: focused ? colors.ActiveLabel : colors.lightGrey,
                },
              ]}>
              Attendance
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="notifications-on" size={size} color={color} />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={[
                styles.tabLabel,
                {
                  color: focused ? colors.ActiveLabel : colors.lightGrey,
                },
              ]}>
              Notifications
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={[
                styles.tabLabel,
                {
                  color: focused ? colors.ActiveLabel : colors.lightGrey,
                },
              ]}>
              Profile
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    height: 89,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingBottom: 24,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
  },
  tabLabel: {fontSize: size.sm, fontWeight: weight.semi, color: colors.black},
  tabIcon: {
    fontWeight: weight.semi,
    width: 20,
    aspectRatio: 1,
  },
});
