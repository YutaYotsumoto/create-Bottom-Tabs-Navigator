import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.Screen}>
      <Text style={styles.font}>Home!</Text>
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

export default HomeScreen;
