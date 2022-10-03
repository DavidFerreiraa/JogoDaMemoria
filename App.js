import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Main from './src/views/Main'

export default function App() {
  return (
    <View style={styles.container}>
      <Main/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  }
});
