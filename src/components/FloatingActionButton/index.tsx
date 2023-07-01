import { Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import colors from '../../theme/colors';

interface IFloatingActionButton {
  onPress: () => void;
}

const FloatingActionButton = ({onPress}: IFloatingActionButton) => {
  return (
    <Pressable
    
      onPress={onPress}
      style={[styles.container]}>
      <Ionicons name="add" color={colors.white} size={24} />
    </Pressable>
  );
};

export default FloatingActionButton;
