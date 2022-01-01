import React, {useCallback} from "react";
import {View, Text, StyleSheet} from "react-native";

import {TouchableOpacity} from "react-native-gesture-handler";

import {TAB_STACK} from "../../navigator/consts";
import {replace} from "../../navigator/navigationService";

import {COLORS} from "../../styles/colors";

export const AuthConfirmScreen = () => {
  const handleGoTo = useCallback(() => {
    replace(TAB_STACK);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Auth Confirm Screen</Text>
      <TouchableOpacity onPress={handleGoTo}>
        <Text>GO TO MAIN TAB</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.WHITE,
  },
});
