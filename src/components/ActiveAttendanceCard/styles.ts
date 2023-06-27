import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import {size, weight} from '../../theme/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 16,
    width: 350,
    height: 102,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 8,
    width: 59,
    height: 40,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'flex-end',
  },
  buttonText: {
    color: colors.white,
  },
  titleText: {
    color: colors.black,
    fontWeight: weight.bold,
    fontSize: size.md,
  },
  subTitleText: {
    color: colors.black,
    fontWeight: weight.normal,
    fontSize: 14,
  },
});

export default styles;
