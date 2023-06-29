import {StyleSheet} from "react-native"
import colors from "../../theme/colors"


const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.mediumBlue,
        width:64,
        aspectRatio:1,
        borderRadius:32,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',

    }
})

export default styles;