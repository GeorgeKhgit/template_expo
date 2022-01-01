import React, {useCallback} from "react";
import {View, Text, StyleSheet} from "react-native";

import {TouchableOpacity} from "react-native-gesture-handler";
import {AUTH_STACK_CONFIRM} from "../../navigator/consts";

import {navigate} from "../../navigator/navigationService";

import {COLORS} from "../../styles/colors";

export const AuthMainScreen = () => {
  const handleGoToDetail = useCallback(() => {
    navigate(AUTH_STACK_CONFIRM);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Auth Main Screen</Text>

      <TouchableOpacity onPress={handleGoToDetail}>
        <Text>GO TO DETAIL</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    justifyContent: "center",
    alignItems: "center",
  },
});
