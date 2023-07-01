import {
  View,
  Text,
  Pressable,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useRoute,useNavigation} from '@react-navigation/native';
import {Appearance} from 'react-native';


import StudentDetailCard from '../../components/StudentDetailCard';

import style from './styles';
import colors from '../../theme/colors';


const AttendanceDetailsScreen = () => {
  const colorScheme = Appearance.getColorScheme();
  Appearance.addChangeListener(({colorScheme}) => {
    console.log('colorScheme', colorScheme);
  }
  );
  


  const navigation = useNavigation();
  const route = useRoute();
  const {data} = route.params as {data: any}
  const attendanceData = data.attendanceData;

  let presentCount = 0;
  let totalNumberOfStudents = data.attendanceData.length;
  let courseName =
    data.course.length > 30
      ? `${data.course.substring(0, 28)}...`
      : data.course;

  let level = data.attendanceData[1].level;
  // Loop through the attendance data for the course
  for (let j = 0; j < totalNumberOfStudents; j++) {
    const student = data.attendanceData[j];

    // If the student is present, increment the present count
    if (student.present) {
      presentCount++;
    }
  }


  const handleBackButton = () => {
    navigation.goBack();
  };
  return (
    <View style={style.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={style.headerContainer}>
        <Pressable
          onPress={handleBackButton}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Ionicons
            name="chevron-back-sharp"
            size={24}
            color={colors.lightGrey}
          />

          <Text style={style.backText}>Back</Text>
        </Pressable>
        <TouchableOpacity style={style.downloadButton}>
          <Text style={style.downloadButtonText}>Download as pdf</Text>
        </TouchableOpacity>
      </View>
      <View style={style.content}>
        <View style={style.titleContainer}>
          <Text style={style.titleText}>{courseName}</Text>
          <Text style={style.subTitleText}>{data.dateCreated}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={style.subTitleText}>Level {attendanceData[0].level} </Text>
            <Text style={style.valueText}> {presentCount}/{totalNumberOfStudents} </Text>
          </View>
        </View>
        <FlatList
          data={attendanceData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <StudentDetailCard data={item} />}
        />

      </View>
    </View>
  );
};

export default AttendanceDetailsScreen;
