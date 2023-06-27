import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import {size, weight} from '../../theme/fonts';

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  headerContainer: {
    marginTop: 67,
    marginBottom: 24,
  },
  welcomeText: {
    color: colors.black,
    fontSize: size.xlg,
    fontWeight: weight.semi,
    marginLeft: 29,
  },
  tabContainer: {
    marginHorizontal: 29,
    padding: 8,
    backgroundColor: colors.lightBlue,
    borderRadius: 8,
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 24,
  },
  tabActive: {
    backgroundColor: colors.white,
    color: colors.black,
    flex: 1,
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  tabInactive: {
    color: colors.black,
    flex: 1,
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  content: {
    flex: 1,
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 20,
    paddingTop: 18,
    gap: 16,

    // height: 234,
  },
});

export default style;
