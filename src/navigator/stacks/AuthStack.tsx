import {createStackNavigator} from "@react-navigation/stack";

import {AuthConfirmScreen} from "../../screens/auth/AuthConfirmScreen";
import {AuthMainScreen} from "../../screens/auth/AuthMainScreen";

import {AUTH_STACK_CONFIRM, AUTH_STACK_MAIN} from "../consts";

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AUTH_STACK_MAIN} component={AuthMainScreen} />
      <Stack.Screen name={AUTH_STACK_CONFIRM} component={AuthConfirmScreen} />
    </Stack.Navigator>
  );
};
