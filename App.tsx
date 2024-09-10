import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import StackNavigation from './navigation/StackNavigation';
import {StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.constainer}>
      <StackNavigation />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
});
