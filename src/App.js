import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import MainNavigator from './navigation/MainNavigator';
import {Provider} from 'react-redux';
import configureStore from './redux/store/configureStore';

const App = () => {
  return (
    <Provider store={configureStore()}>
    <SafeAreaView style={styles.container}>
      <MainNavigator />
    </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
