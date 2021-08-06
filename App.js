import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  navigationContainer,
} from "@react-navigation/native";

import HomeScreen from "./screens/HomeScreen";
import Diet from "./screens/Diet";
import Cholera from "./screens/disease-diets/Cholera";
import Home from "./screens/disease-diets/Home";

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Diet" component={Diet} />
          <Stack.Screen name="Cholera" component={Cholera} />
          <Stack.Screen name="HomeScreen" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
