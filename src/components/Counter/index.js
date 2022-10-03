import { StyleSheet, Text, View } from "react-native";

export default function Counter(props) {
    return (
        <View>
            <Text style={styles.container}>Score: {props.points}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#666",
        borderColor: "#333",
        borderWidth: 2,
        fontSize: 27,
        padding: 25,
        margin: 45,
        color: "#fff",
        borderRadius: 5,
    }
});