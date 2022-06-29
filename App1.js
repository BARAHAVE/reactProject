import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import Logo from "./components/Logo";
import Stysheet from "./components/Stysheet";
import TextInputExample from "./components/TextInputExample";
import Cafe from "./Cafe";
import Cat from "./components/Cat";

const App = () => {
  const showData = () => {

    alert("Hello Button")

  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.warning]}>Hello React Native</Text>
      {<Logo />}
      <Button
      onPress={showData} 
      title="Click Me" />
      {/*< Stysheet/ >*/}
      {/*<TextInputExample/>/*}
      {/*<Cafe/>*/}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    fontSize: 20,
  },
  warning: {
    color: "red",
  },
});
