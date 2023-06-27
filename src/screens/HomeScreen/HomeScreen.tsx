import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Pressable,
  StatusBar,
} from 'react-native';
import style from './styles';
import colors from '../../theme/colors';
import {useState} from 'react';
import SearchField from '../../components/SearchField';
import ActiveAttendanceCard from '../../components/ActiveAttendanceCard';

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState('active');
  return (
    <View style={style.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" translucent />
      <View style={style.headerContainer}>
        <Text style={style.welcomeText}>Welcome Back</Text>
        <View style={style.tabContainer}>
          <Pressable
            onPress={() => setSelectedTab('active')}
            style={
              selectedTab == 'active' ? style.tabActive : style.tabInactive
            }>
            <Text
              style={{
                color:
                  selectedTab == 'active' ? colors.black : colors.lightGrey,
              }}>
              Active
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setSelectedTab('history')}
            style={
              selectedTab == 'history' ? style.tabActive : style.tabInactive
            }>
            <Text
              style={{
                color:
                  selectedTab == 'history' ? colors.black : colors.lightGrey,
              }}>
              History
            </Text>
          </Pressable>
        </View>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <SearchField />
        </View>
      </View>
      <View style={style.content}>
        <ActiveAttendanceCard />
        <ActiveAttendanceCard />
      </View>
    </View>
  );
};

export default HomeScreen;
