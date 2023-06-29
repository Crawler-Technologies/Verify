import {TouchableOpacity,Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import colors from '../../theme/colors';

interface IFloatingActionButton {
  top?: number;
  left?: number;
  right: number;
  bottom: number;
  onPress: () => void;
}

const FloatingActionButton = ({
  top,
  left,
  right,
  bottom,
  onPress,
}: IFloatingActionButton) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, {left, top, right, bottom}]}>
      <Ionicons name="add" color={colors.white} size={24} />
    </Pressable>
  );
};

export default FloatingActionButton;
