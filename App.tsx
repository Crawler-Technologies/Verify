import {View, ScrollView, StyleSheet, FlatList} from 'react-native';
import Navigation from './src/components/Navigation';

const App = () => {
  return (
    <View style={styles.container}>
     <Navigation/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
