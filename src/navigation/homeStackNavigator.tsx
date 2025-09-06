import React, { FC, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackProps } from "../@types";

import { Vehicles, VehiclesDetails } from "../screens";

const HomeStackNavigator: FC = () => {
  const HomeStack = createNativeStackNavigator<HomeStackProps>();
  const Stack = createNativeStackNavigator();
  return (

    <HomeStack.Navigator>
      <Stack.Screen
        name="Vehicles"
        component={ Vehicles }
        options={ { headerShown: false } }
      />
      <Stack.Screen
        name="VehiclesDetails"
        component={ VehiclesDetails }
        options={ { headerShown: false } }
      />

    </HomeStack.Navigator>

  );
};

export default HomeStackNavigator;
