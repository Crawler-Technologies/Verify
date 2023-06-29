import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.grey,
    width: 48,
    height: 362,
  },
  inputField: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default styles;
