import {View, Text, Pressable} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import styles from './styles';
import {useState} from 'react';
import {IExamAttendance} from '../../types/models';
import colors from '../../theme/colors';

interface IAttendanceCard {
  data: IExamAttendance;
}
interface IChildren {
  remainingTime: number;
}

const ActiveAttendanceCard = ({data}: IAttendanceCard) => {
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
  let time = 1600;

  let transitionColors = [colors.primary, colors.mediumBlue, colors.accent];
  let transitionTime = [time / 2, time * 0.72, 0];

  const children = ({remainingTime}: IChildren) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return (
      <View>
        <Text style={styles.remainingTime}>{minutes}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.timer}>
          {/* timer here */}
          <CountdownCircleTimer
            duration={time}
            strokeWidth={6}
            colors={transitionColors}
            colorsTime={transitionTime}
            isPlaying
            children={children}
            size={40}
          />
          <Text style={styles.remainingTimeFormat}>mins left</Text>
        </View>
        <View>
          <Text style={styles.titleText}>{courseName}</Text>
          <Text style={styles.subTitleText}>
            Attendance: {presentCount}/{totalNumberOfStudents}
          </Text>
          <Text style={styles.subTitleText}>level : {level}</Text>
        </View>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>View</Text>
      </Pressable>
    </View>
  );
};

export default ActiveAttendanceCard;
