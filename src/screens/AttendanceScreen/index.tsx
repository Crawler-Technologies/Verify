import {useState} from 'react';
import {View, Text, Pressable, StatusBar, FlatList} from 'react-native';
import SearchField from '../../components/SearchField';
import NotificationCard from '../../components/NotificationCard';

import style from './styles';
import colors from '../../theme/colors';
import notifications from '../../assets/data/notifications.json';

const NotificationScreen = () => {
  return (
    <View style={style.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={style.headerContainer}>
        <Text style={style.welcomeText}>Notifications</Text>
        <View style={{alignItems: 'center', marginTop: 24}}>
          <SearchField />
        </View>
      </View>
      <View style={style.content}>
        <FlatList
          data={notifications}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <NotificationCard data={item} />}
        />
      </View>
    </View>
  );
};

export default NotificationScreen;
