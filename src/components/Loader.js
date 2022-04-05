import React from 'react';
import {View, StyleSheet} from 'react-native';
import {LinesLoader} from 'react-native-indicator';
import Colors from '../constants/colors';

const Loader = () => {
  return (
    <View style={styles.container}>
      <LinesLoader
        barWidth={10}
        barHeight={80}
        betweenSpace={4}
        color={Colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Loader;
