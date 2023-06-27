import { StyleSheet} from 'react-native'
import colors from '../../theme/colors'

const styles = StyleSheet.create({
    container:{
        width:332,
        height:44,
        borderRadius:8,
        backgroundColor:colors.cream,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:16,
    },
    inputField:{
        flex:1,
        color:colors.black,
    },
    icon:{

    }
})

export default styles