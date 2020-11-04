import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";

import CarListScreen from "./src/screens/CarListScreen";
import CarDetailScreen from "./src/screens/CarDetailScreen";
import CarBookScreen from "./src/screens/CarBookScreen";

import TabBookingsScreen from './src/screens/TabBookingsScreen';
import TabAccountScreen from "./src/screens/TabAccountScreen";
import TabAboutScreen from "./src/screens/TabAboutScreen";


const navigator = createSwitchNavigator(
  {
    ResolveAuth: ResolveAuthScreen,
    loginFlow: createStackNavigator({
      Login: LoginScreen,
      Signup: SignupScreen,
    }),
    mainFlow: createBottomTabNavigator({
      Car: createStackNavigator({
        CarList: CarListScreen,
        CarDetail: CarDetailScreen,
        CarBook: CarBookScreen,
      }),
      Bookings: TabBookingsScreen,
      Account: TabAccountScreen,
      About: TabAboutScreen,
    }),
  },
  {
    initialRouteName: "mainFlow",
  }
);

const App = createAppContainer(navigator);

export default () => {
  return <App />;
};
