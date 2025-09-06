import React, { FC, useContext, useEffect, useRef, useState } from "react";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackNavigator } from "../navigation";
import { Platform, StatusBar, useColorScheme } from "react-native";
import colors from "../constants/Colors";
const Stack = createNativeStackNavigator();
const Route: FC = () => {

  const theme = useColorScheme();


  return (

    <NavigationContainer theme={ theme === "dark" ? DarkTheme : DefaultTheme }>
      <StatusBar
        barStyle={ Platform.OS === "ios" ? "dark-content" : "dark-content"}
        backgroundColor={colors.dark_blue_color}
      />
      <Stack.Navigator screenOptions={ { headerShown: false } }>

        <Stack.Screen
          name="HomeStackNavigator"
          component={ HomeStackNavigator }
        />

      </Stack.Navigator>
    </NavigationContainer>

  );
};
export default Route;
