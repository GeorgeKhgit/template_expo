import {NavigationContainer} from "@react-navigation/native";

import {createStackNavigator} from "@react-navigation/stack";

import {AuthStack} from "./stacks/AuthStack";
import {TabStack} from "./tabs";

import {navigationRef} from "./navigationService";

import {AUTH_STACK, TAB_STACK} from "./consts";

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={AUTH_STACK} component={AuthStack} />
        <Stack.Screen name={TAB_STACK} component={TabStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
