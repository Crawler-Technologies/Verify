import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';

import colors from '../../theme/colors';
import {size, weight} from '../../theme/fonts';

import {IStudent} from '../../types/models';

interface IStudentDetailCard {
  data: IStudent;
}

const StudentDetailCard = ({data}: IStudentDetailCard) => {
  return (
    <View
      style={{
        width: '100%',
        height: 75,
        borderRadius: 16,
        justifyContent: 'center',
        padding:16,
        backgroundColor: data.present ? colors.successLight : colors.errorLight,
        marginTop:16,
      }}>
      <Text
        style={{
          fontWeight: weight.bold,
          fontSize: size.md,
          color: colors.black,
        }}>
        {data.indexNumber}
      </Text>
      <Text
        style={{
          fontWeight: weight.bold,
          fontSize: 14,
          marginTop: 8,
          color: colors.lightGrey,
        }}>
        {data.name}
      </Text>
    </View>
  );
};

export default StudentDetailCard;
