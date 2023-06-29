import {useState} from 'react';
import {View, Text, Pressable, StatusBar, FlatList} from 'react-native';
import SearchField from '../../components/SearchField';
import ActiveAttendanceCard from '../../components/ActiveAttendanceCard';
import FloatingActionButton from '../../components/FloatingActionButton';
import ModalContainer from '../../components/Modal';

import style from './styles';
import colors from '../../theme/colors';
import records from '../../assets/data/records.json';
import TextField from '../../components/TextField';

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState('active');
  const [isModalOpened, setIsModalOpened] = useState(false);

  const onAddAttendance = () => {
    setIsModalOpened(true);
  };
  return (
    <View style={style.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
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
        <FlatList
          data={records}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <ActiveAttendanceCard data={item} />}
        />
      </View>
      <ModalContainer
        showModal={isModalOpened}
        onRequestClose={() => setIsModalOpened(false)}
        children={<TextField placeholder="12345678" />}
        showMask={isModalOpened}
      />
      <FloatingActionButton onPress={onAddAttendance} bottom={42} right={20} />
    </View>
  );
};

export default HomeScreen;
