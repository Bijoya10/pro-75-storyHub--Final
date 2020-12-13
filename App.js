import React from 'react';
import { StyleSheet } from 'react-native';
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createAppContainer} from "react-navigation";
import WriteStoryScreen from "./screens/WriteStoryScreen";
import ReadStoryScreen from "./screens/ReadStoryScreen";

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

var TabNavigator=createBottomTabNavigator({
  Read:{screen:ReadStoryScreen},
  Write:{screen:WriteStoryScreen}
})
const AppContainer=createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
