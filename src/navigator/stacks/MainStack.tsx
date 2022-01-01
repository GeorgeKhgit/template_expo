import React from "react";

import {createStackNavigator} from "@react-navigation/stack";

import {AboutScreen} from "../../screens/main/AboutScreen";
import {MainScreen} from "../../screens/main/MainScreen";

import {MAIN_STACK_ABOUT, MAIN_STACK_MAIN} from "../consts";

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={MAIN_STACK_MAIN} component={MainScreen} />
      <Stack.Screen name={MAIN_STACK_ABOUT} component={AboutScreen} />
    </Stack.Navigator>
  );
};
