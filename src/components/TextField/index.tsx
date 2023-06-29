import {View,TextInput } from 'react-native';
import styles from './styles';


interface ITextField{
  placeholder:string;
}

const TextField = ({placeholder}:ITextField) => {
  return (
    <View style={styles.container}>
     <TextField placeholder={placeholder} style={styles.inputField}/>
    </View>
  );
};

export default TextField;
