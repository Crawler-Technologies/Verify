import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import {size, weight} from '../../theme/fonts';

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex:1,
  },
  headerContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal:21,
    marginTop: 67,
    marginBottom: 24,
  },
  backText: {
    color: colors.lightGrey,
    fontSize: size.xlg,
    fontWeight: weight.semi,
    marginLeft: 8,
    
  },
  downloadButton:{
    width:137,
    height:40,
    borderRadius:8,
    backgroundColor:colors.primary,
    justifyContent:'center',
    alignItems:'center',
  },
  downloadButtonText:{
    color:colors.white,
    fontSize:size.md,
    fontWeight:weight.semi,
  }
  ,
  content: {
    flex: 1,
    backgroundColor: colors.cream,
    paddingHorizontal: 20,
    paddingTop: 2,
 
  },
  titleContainer:{
    marginTop:32,}
  ,
  titleText:{
    color:colors.black,
    fontSize:size.xlg,
    fontWeight:weight.semi,
  },
  subTitleText:{
    color:colors.lightGrey,
    fontSize:size.md,
    fontWeight:weight.normal,
    marginTop:10,
  },

  valueText:{
    color:colors.white,
    fontSize:size.md,
    fontWeight:weight.normal,
    marginTop:10,
    height:28,
    width:70,
    borderRadius:4,
    backgroundColor:colors.mediumBlue,
    textAlign:'center',
    textAlignVertical:'center',
  },

});

export default style;
