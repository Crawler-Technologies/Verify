import {View, TextInput} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchField = () => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="search"
        size={24}
        style={styles.icon}
        color={"#D4D6DD"}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor={colors.grey}
        style={styles.inputField}
      />
      <Ionicons
        name="filter-outline"
        size={24}
        style={styles.icon}
        color={colors.black}
      />
    </View>
  );
};

export default SearchField;
