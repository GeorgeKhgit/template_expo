import {StatusBar} from "expo-status-bar";
import {StyleSheet} from "react-native";

import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

import {Navigator} from "./src/navigator/Navigator";

import {COLORS} from "./src/styles/colors";

const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar style="auto" />
      <Navigator />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
});

export default App;
