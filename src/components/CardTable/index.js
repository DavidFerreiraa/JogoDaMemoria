import { View, StyleSheet } from "react-native";
import Card from '../../components/Card'

export default function CardTable() {
  return (
    <View style={styles.container}>
      <Card/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "16rem",
    paddingBottom: 40,
    backgroundColor: "#ddd",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    shadowRadius: 20,
    }
});