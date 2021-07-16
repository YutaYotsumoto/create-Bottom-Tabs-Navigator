import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ToDoListScreen = () => {
  return (
    <View style={styles.Screen}>
      <Text>ToDoList!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ToDoListScreen;
