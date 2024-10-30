import { View, StyleSheet, Alert, Text, FlatList } from "react-native";
import Title from "../components/UI/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NUmberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import { useEffect } from "react";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ usernumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, usernumber);
  const [CurrentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRound] = useState([initialGuess]);

  useEffect(() => {
    if (CurrentGuess === usernumber) {
      onGameOver(guessRounds.length);
    }
  }, [CurrentGuess, usernumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "Lower" && CurrentGuess < usernumber) ||
      (direction === "Greater" && CurrentGuess > usernumber)
    ) {
      return Alert.alert("Don't Lie!", "You know this is wrong.", [
        { text: "Sorry!", style: "cancel" },
      ]);
    }
    if (direction === "Lower") {
      maxBoundary = CurrentGuess;
    } else {
      minBoundary = CurrentGuess + 1;
    }
    const newRandomNumberGuess = generateRandomBetween(
      minBoundary,
      maxBoundary,
      CurrentGuess
    );
    setCurrentGuess(newRandomNumberGuess);
    setGuessRound((prevGuessRound) => [
      newRandomNumberGuess,
      ...prevGuessRound,
    ]);
  }

  const guessRoundListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{CurrentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Lower or Higher ?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "Lower")}>
              <Ionicons name="remove" size={24} color={"#ffffff"} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "Greater")}>
              <Ionicons name="add" size={24} color={"#ffffff"} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View  style={styles.listContainer} >
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
      {/* <View>{guessRounds.map(guessRounds=> <Text key = {guessRounds}>{guessRounds}</Text>)}</View> */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 36,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 26,
  },
  listContainer: {
    flex: 1, // Allows FlatList to take available space and be scrollable
    marginTop: 10,
    padding:10
  },
});
