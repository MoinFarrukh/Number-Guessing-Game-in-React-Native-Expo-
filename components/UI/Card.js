import { View, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.Card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  Card: {
    marginHorizontal: 24,
    marginTop: 30,
    padding: 12,
    borderRadius: 8,
    backgroundColor: Colors.primary700,
    elevation: 75,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
