import {useState} from 'react';
import {
  View,
  Text,
  Image,
  Switch,
  Pressable,
  StatusBar,
  FlatList,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Ionicons from 'react-native-vector-icons/Ionicons';

import style from './styles';
import colors from '../../theme/colors';

const ProfileScreen = () => {
  const user = {
    firstName: 'george',
    lastName: 'anku-mensah',
    email: 'georgeankumensah@gmail.com',
    image: null,
  };
  const [darkMode, setDarkMode] = useState(false);
  const toggleSwitch = () => setDarkMode(previousState => !previousState);

  return (
    <View style={style.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <View>
        {user.image ? (
          <Image source={user.image} style={style.avatar} />
        ) : (
          <View style={style.placeholderContainer}>
            <Text style={style.placeholderText}>AP</Text>
          </View>
        )}
      </View>
      <Text style={style.username}>
        {user.firstName} {user.lastName}
      </Text>
      <Text style={style.email}>{user.email}</Text>

      <View style={style.listContainer}>
        <Pressable style={style.buttonContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons
              name="md-moon"
              size={24}
              color={colors.primary}
              style={style.icon}
            />

            <Text style={style.listItem}>Dark Mode</Text>
          </View>
          <Switch
            trackColor={{false: '#767577', true: colors.primary}}
            thumbColor={darkMode ? colors.white : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={darkMode}
          />
        </Pressable>
        <Pressable style={style.buttonContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons
              name="information-circle"
              size={24}
              color={colors.primary}
              style={style.icon}
            />

            <Text style={style.listItem}>Help & Support</Text>
          </View>
            <Ionicons
              name="chevron-forward-sharp"
              size={24}
              color={colors.lightGrey}
            />
        </Pressable>
        <Pressable style={style.buttonContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialIcons
              name="verified-user"
              size={24}
              color={colors.primary}
              style={style.icon}
            />

            <Text style={style.listItem}>Privacy Policy</Text>
          </View>
          <Ionicons
            name="chevron-forward-sharp"
            size={24}
            color={colors.lightGrey}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileScreen;
