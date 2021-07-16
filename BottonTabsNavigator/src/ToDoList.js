import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ToDoListScreen = () => {
  return (
    <View style={styles.Screen}>
      <Text style={styles.font}>ToDoList!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  font: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default ToDoListScreen;
