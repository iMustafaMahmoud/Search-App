import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import BookDescription from "./../screens/BookDescription";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="BookDescription" component={BookDescription} />
    </Stack.Navigator>
  </NavigationContainer>
);
