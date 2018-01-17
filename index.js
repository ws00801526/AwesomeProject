import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import { Platform, StyleSheet, Text, View, AppRegistry } from 'react-native';
import { UIFORM, UICONTROL, UIVIEW } from './demo';
import IndexPage from './pages/IndexPage';

const getOptions = title => ({
  title,
  headerStyle: {
    backgroundColor: '#12c287',
  },
  headerTintColor: 'white',
});

const scenes = {
  Index: {
    screen: IndexPage,
    navigationOptions: getOptions('AwesomeProject'),
  },
};

[...UIFORM, ...UICONTROL, ...UIVIEW].forEach((component)=>{
  scenes[component.title] = {
    screen: component.module.default,
    navigationOptions: getOptions(component.title),
  };
})

const App = StackNavigator(scenes);
AppRegistry.registerComponent('AwesomeProject', () => App);
export default App
