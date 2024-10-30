import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}> {children} </Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    overflow: "hidden",
    borderRadius: 28,
    margin: 4,
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    // AGAINST y-axis up/down
    paddingVertical: 8,
    // AGAINST x-axis left/right
    paddingHorizontal: 16,
    elevation: 4,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
  },
});
