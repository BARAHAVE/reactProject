import React from "react";
import { StyleSheet, TextInput, View,  Button } from "react-native";

const TextInputExample = () => {
  return (
    <View style={{ padding: 10 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Corse Goal"
          style={{
            width: "80%",
            borderColor: "black",
            borderColor: 1,
            padding: 10,
          }}
        />
        <Button title="ADD" />
      </View>
      <View />
    </View>
  );
};

export default TextInputExample;
