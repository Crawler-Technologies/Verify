import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import {size, weight} from '../../theme/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 16,
    height: 75,
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
  icon: {
    marginRight: 16,
  },
});

export default styles;
