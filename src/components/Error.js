import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../constants/colors';

const Error = ({onPressHandler}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>Something Went Wrong,</Text>
      <Text style={styles.errorText}>Please Try Again</Text>
      <TouchableOpacity style={styles.refreshButton} onPress={onPressHandler}>
        <MaterialIcons name="refresh" size={30} color={Colors.secondary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 20,
    paddingHorizontal: 30,
    color: Colors.primary,
    fontFamily: 'Metamorphous',
  },
  refreshButton: {
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    borderWidth: 1,
    padding: 10,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Error;
