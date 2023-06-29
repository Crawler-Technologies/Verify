import {View, Text, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import {useState} from 'react';
import {INotification} from '../../types/models';
import colors from '../../theme/colors';

interface INotificationCard {
  data: INotification;
}

const NotificationCard = ({data}: INotificationCard) => {
  let presentCount = 0;
  let title =
    data.event.length > 23 ? `${data.event.substring(0, 23)}...` : data.event;

  let message =
    data.message.length > 29
      ? `${data.message.substring(0, 29)}...`
      : data.message;



  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {data.event == "Time's Up!" && (
          <MaterialIcons
            name="timer"
            size={24}
            color={colors.primary}
            style={styles.icon}
          />
        )}
        {data.event == 'New Access' && (
          <MaterialIcons
            name="no-encryption"
            size={24}
            color={colors.primary}
            style={styles.icon}
          />
        )}
        {data.event == 'Early Departure' && (
          <MaterialIcons
            name="hourglass-full"
            size={24}
            color={colors.primary}
            style={styles.icon}
          />
        )}
        {data.event == 'Attendance Cancellation' && (
          <MaterialIcons
            name="cancel"
            size={24}
            color={colors.accent}
            style={styles.icon}
          />
        )}

        <View>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.subTitleText}>{message}</Text>
        </View>
      </View>
      <Ionicons
        name="chevron-forward-sharp"
        size={24}
        color={colors.lightGrey}
      />
    </View>
  );
};

export default NotificationCard;
