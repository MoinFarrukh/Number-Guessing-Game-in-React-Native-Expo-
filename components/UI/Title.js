import { View, StyleSheet, Text } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#ffffff',
    textAlign: "center",
    borderWidth: 2,
    borderColor:'#ffffff',
    padding: 12,
    marginTop: 25,
fontFamily:'open-sans-bold'
  },
});
