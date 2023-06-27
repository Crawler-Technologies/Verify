import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import React from 'react';

const ActiveAttendanceCard = () => {
  return (
    <View style={styles.container}>
      <View>
      </View>
      <View>
        <Text style={styles.titleText}>Bsc. Computer Science</Text>
        <Text style={styles.subTitleText}>Attendance: 20/100</Text>
        <Text style={styles.subTitleText}>level : 300</Text>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>View</Text>
      </Pressable>
    </View>
  );
};

export default ActiveAttendanceCard;
