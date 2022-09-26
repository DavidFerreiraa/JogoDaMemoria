import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

let abertas = [];

export default function Card() {
  let [pontuacao, setPontuacao] = useState(0);

  const [board, setBoard] = useState([
      { status: 0, color: "#3498DB", key: 1},
      { status: 0, color: "#16A085", key: 2},
      { status: 0, color: "#8E44AD", key: 3},
      { status: 0, color: "#16A085", key: 4},
      { status: 0, color: "#3498DB", key: 5},
      { status: 0, color: "#8E44AD", key: 6},
    ]);

  const openCard = (card, index) => {
    if (card.status === 0) {
      let newBoard = [...board];
      let item = { ...newBoard[index] };
      item.status = 1;
      newBoard[index] = item;
      setBoard(newBoard);
      abertas.push(item)
      if (abertas.length === 2) {
        comparaCarta(abertas);
        abertas = []
      }
    }
  };
  
  const comparaCarta = (cards) => {
    cards[0].color === cards[1].color ? contarPontuacao() : limpaCarta(cards)
  }

  const limpaCarta = (cards) => {
    cards.map((card) => {
      card.status = 0
    })
  }

  const contarPontuacao = () => {
    setPontuacao(pontuacao+1)
    console.log(pontuacao)
  }
  return (
      <View style={styles.container}>
        {board.map((card, index) => (
          <TouchableOpacity key={card.key} onPress={() => openCard(card, index)}>
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
