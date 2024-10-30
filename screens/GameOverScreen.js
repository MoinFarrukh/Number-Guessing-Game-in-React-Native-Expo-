import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Title from "../components/UI/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/UI/PrimaryButton";

const GameOverScreen = ({roundsNumber , userNumber , onStartNewGame}) => {
  return (
    <View style={styles.mainContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/Trophy.jpg")} />
      </View>
      <View>
        <Text style={styles.generalText}>
          Your Phone Needed <Text style={styles.hilightText} >{roundsNumber}</Text> Rounds To Guess the Number{" "}
          <Text style={styles.hilightText} >{userNumber}</Text>
        </Text>
      </View>
      <PrimaryButton onPress={onStartNewGame}>
        Start New Game
      </PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary700,
    overflow: "hidden",
    margin: 40,
  },
  image: {
    width: "100%", // Adjust width to match container
    height: "100%", // Adjust height to match container
    resizeMode: "cover", // Ensures the image covers the container area
  },
  generalText: {
    fontFamily: "open-sans",
    fontSize:18,
    textAlign:'center',
    marginVertical:24    // Top and bottom both
  },
  hilightText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary700,
  },
});
