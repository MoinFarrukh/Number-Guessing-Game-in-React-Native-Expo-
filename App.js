import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  View,
  ActivityIndicator,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const [gameIsOver, setgameIsOver] = useState(true);

  const [guessRounds, setguessRounds] = useState(0);

  const [fontLoaded] = useFonts({
    "open-sans": require("../Mini-Game/assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("../Mini-Game/assets/fonts/OpenSans-Bold.ttf"),
  });

  // Render a loading indicator while fonts are loading
  if (!fontLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.primary700} />
      </View>
    );
  }

  function PickedNumberHandler(PickedNumber) {
    setUserNumber(PickedNumber);
    setgameIsOver(false);
  }
  function gameOverHandler(numberofRounds) {
    setgameIsOver(true);
    setguessRounds(numberofRounds);
  }

  function StartNewGameHandler() {
    setUserNumber(null);
    setguessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={PickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen usernumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={StartNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.acent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        style={styles.rootScreen}
        source={require("../Mini-Game/assets/piotr-makowski-27LH_0jXKYI-unsplash.jpg")}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
