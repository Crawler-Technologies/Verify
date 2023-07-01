import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import {size, weight} from '../../theme/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 16,
    height: 102,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    borderRadius: 8,
    width: 59,
    height: 40,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
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
  timer: {
    width: 40,
    marginRight: 16,
  },
  remainingTime: {
    color: colors.black,
    fontSize: size.sm,
    fontWeight: weight.bold,
  },
  remainingTimeFormat: {
    color: colors.black,
    fontSize: size.xs,
    textAlign: 'center',
  },
});

export default styles;
