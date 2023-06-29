import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import {size, weight} from '../../theme/fonts';

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  listItem: {
    fontSize: size.md,
    color: colors.black,
  },
  username: {
    fontWeight: weight.bold,
    fontSize: size.md,
    color: colors.black,
    textAlign: 'center',
    marginTop: 16,
  },
  email: {
    fontSize: size.md,
    color: colors.lightGrey,
    textAlign: 'center',
  },
  avatar: {
    width: 114,
    aspectRatio: 1,
    borderRadius: 57,
    backgroundColor: colors.primary,
    marginTop: 100,
    alignSelf: 'center',
  },
  listContainer: {
    marginTop: 24,
    alignSelf: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
  },
  placeholderContainer: {
    width: 114,
    aspectRatio: 1,
    borderRadius: 57,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    alignSelf: 'center',
  },
  placeholderText: {
    fontSize: size.xlg,
    color: colors.white,
    fontWeight: weight.bold,
  },
  icon: {
    marginRight: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    width:350,
    height:60,
    paddingHorizontal:16,
  },
});

export default style;
