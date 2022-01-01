import React, {useCallback} from "react";
import {View, Text, StyleSheet} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import {MAIN_STACK_ABOUT} from "../../navigator/consts";
import {navigate} from "../../navigator/navigationService";
import {COLORS} from "../../styles/colors";

export const MainScreen = () => {
  const handleGoTo = useCallback(() => {
    navigate(MAIN_STACK_ABOUT);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Main Screen</Text>

      <TouchableOpacity onPress={handleGoTo}>
        <Text>GO TO ABOUT PAGE</Text>
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
