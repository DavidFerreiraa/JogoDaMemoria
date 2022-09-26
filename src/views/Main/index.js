import { View, StyleSheet } from "react-native";
import Card from '../../components/Card'

export default function App() {
  return (
    <View style={styles.container}>
      <Card/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "12rem",
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
    }
});