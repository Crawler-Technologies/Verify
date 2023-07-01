import {View, ScrollView, StyleSheet, FlatList} from 'react-native';
import {Appearance} from 'react-native';

import Navigation from './src/components/Navigation';

const App = () => {
  const colorScheme = Appearance.getColorScheme();
  Appearance.addChangeListener(({colorScheme}) => {
    console.log('colorScheme', colorScheme);
  }
  );
  

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
