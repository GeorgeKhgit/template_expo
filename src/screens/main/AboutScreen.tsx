import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {COLORS} from "../../styles/colors";

export const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text>About Screen</Text>
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
