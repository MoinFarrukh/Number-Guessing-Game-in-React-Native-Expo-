import { View, StyleSheet ,Text} from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const InstructionText = ({ children ,style}) => {
  return (
    <View>
      <Text style = {[styles.imputBlockHeading,style]}>{children}</Text>
    </View>
  );
};

export default InstructionText;

const styles = StyleSheet.create({
  imputBlockHeading: {
    color: Colors.acent500,
    fontSize: 24,
    fontFamily:'open-sans'
  }
});
