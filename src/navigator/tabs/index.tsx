import React from "react";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import {MainStack} from "../stacks/MainStack";

import {TAB_STACK_MAIN} from "../consts";

const Tab = createBottomTabNavigator();

export const TabStack = () => {
  return (
    <Tab.Navigator initialRouteName="" screenOptions={{headerShown: false}}>
      <Tab.Screen name={TAB_STACK_MAIN} component={MainStack} />
    </Tab.Navigator>
  );
};
