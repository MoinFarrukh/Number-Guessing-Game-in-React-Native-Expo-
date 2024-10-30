import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
function NumberContainer({ children }) {
  return (
    <View style = {styles.container}>
      <Text
      style = {styles.numbertext}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor:Colors.acent500,
    padding:24,
    borderRadius:8,
    margin:24,
    borderRadius:8,
    alignItems:'center',
    justifyContent:'center'
  },
  numbertext: {
    color:Colors.acent500,
    fontFamily:'open-sans-bold',
    fontSize:36
  },
});
