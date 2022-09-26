import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function Card() {
    const [board, setBoard] = useState([
        { status: 0, color: "#3498DB" },
        { status: 0, color: "#16A085" },
        { status: 0, color: "#8E44AD" },
        { status: 0, color: "#16A085" },
        { status: 0, color: "#3498DB" },
        { status: 0, color: "#8E44AD" },
      ]);
    
      const openCard = (card, index) => {
        if (card.status === 0) {
          let newBoard = [...board];
          let item = { ...newBoard[index] };
          item.status = 1;
          newBoard[index] = item;
          setBoard(newBoard);
        }
      };

    return (
        <View style={styles.container}>
          {board.map((card, index) => (
            <TouchableOpacity onPress={() => openCard(card, index)}>
              <View
                style={[
                  styles.card,
                  { backgroundColor: card.status === 0 ? "#ABB2B9" : card.color },
                ]}
              ></View>
            </TouchableOpacity>
          ))}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    height: 50,
    width: 40,
    borderRadius: 4,
    margin: 4,
  },
});
