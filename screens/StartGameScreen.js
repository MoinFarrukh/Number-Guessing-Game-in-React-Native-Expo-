import { useState } from "react";
import { TextInput, View, StyleSheet, Alert} from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/UI/Title";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";


function StartGameScreen({ onPickNumber }) {
  // Page Logic Section Start

  const [enteredNumber, SetEnteredNumber] = useState("");

  function numberInputHandler(enteredNumber) {
    SetEnteredNumber(enteredNumber);
  }
  function ResetInputHandler() {
    SetEnteredNumber("");
  }
  function ConfirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number!", "Number Should be Between 1 and 99", [
        { text: "Okey", style: "destructive", onPress: ResetInputHandler },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  }

  // Page Logic Section End

  // Page Layout Section Start
  return (
    <View style={styles.rootTitleContainer}>
      <Title>Guess My Number</Title>
      <Card style={styles.inputContainer}>
        <InstructionText>
          Enter Number
        </InstructionText>
        <TextInput
          style={styles.textInput}
          keyboardType="number-pad"
          autoCorrect={false}
          maxLength={2}
          autoCapitalize="none"
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsDirection}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={ResetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={ConfirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

// Page Layout Section Start

export default StartGameScreen;

const styles = StyleSheet.create({
  
  rootTitleContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  inputContainer: {
    //flex: 1,
    marginHorizontal: 24,
    marginTop: 30,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.primary700,
    elevation: 75,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 1,
    justifyContent: "center",
    alignItems: "center",
    //flexDirection:"row",
  },

  textInput: {
    height: 50,
    width: 38,
    fontSize: 32,
    borderBottomColor: Colors.acent500,
    borderBottomWidth: 2,
    color: Colors.acent500,
    marginBottom: 10,
  },
  buttonsDirection: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
