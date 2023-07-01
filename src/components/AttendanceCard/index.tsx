import {View, Text, Pressable} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import {IExamAttendance} from '../../types/models';

interface IAttendanceCard {
  data: IExamAttendance;
}
interface IChildren {
  remainingTime: number;
}

const AttendanceCard = ({data}: IAttendanceCard) => {
  let presentCount = 0;
  let totalNumberOfStudents = data.attendanceData.length;
  let courseName =
    data.course.length > 23
      ? `${data.course.substring(0, 23)}...`
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
  // let time = data.time;
  let time = 160;
  // ['#FF0000', '#00FF00', '#0000FF'];

  const children = ({remainingTime}: IChildren) => {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    const format = () => {
      if (hours > 0) {
        return `${hours}:${minutes}:${seconds}`;
      } else if (minutes > 0) {
        return `${minutes}:${seconds}`;
      } else {
        return `${seconds}`;
      }
    };

    return (
      <View>
        <Text style={styles.remainingTime}>{minutes}</Text>
      </View>
    );
  };

  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate('AttendanceDetails', {data});
  };
  return (
    <Pressable style={styles.container} onPress={handleNavigation}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.timer}>
          {/* timer here */}
          <CountdownCircleTimer
            duration={time}
            strokeWidth={6}
            colors={['#0A6EBD', '#468FC8', '#ed4956']}
            colorsTime={[time / 2, time * 0.72, 0]}
            isPlaying
            children={children}
            size={40}
          />
          <Text style={styles.remainingTimeFormat}>mins{'\n'}left</Text>
        </View>
        <View>
          <Text style={styles.titleText}>{courseName}</Text>
          <Text style={styles.subTitleText}>
            Attendance: {presentCount}/{totalNumberOfStudents}
          </Text>
          <Text style={styles.subTitleText}>level : {level}</Text>
        </View>
      </View>
      <Pressable style={styles.button} onPress={handleNavigation}>
        <Text style={styles.buttonText}>View</Text>
      </Pressable>
    </Pressable>
  );
};

export default AttendanceCard;
