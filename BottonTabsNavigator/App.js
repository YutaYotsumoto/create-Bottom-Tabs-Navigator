import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './src/HomeScreen';
import ProfileScreen from './src/ProfileScreen';
import ToDoListScreen from './src/ToDoList';

<HomeScreen />;

<ToDoListScreen />;

<ProfileScreen />;

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={HomeScreen}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="ToDo-List" component={ToDoListScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
