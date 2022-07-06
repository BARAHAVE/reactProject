import { View, Text } from "react-native";
import React from "react";

const Greeting = (props) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text>
        Hello {props.name} {props.date}
      </Text>
    </View>
  );
};

const LotsOfGreetings = () => {
  return (
    <View style={{ alignItems: "center", top: 50 }}>
      <Greeting name="Marry Christmas" date="25-DEC-2022" />
      <Greeting name="Happy New Year" date="1-JAN-2023" />
      <Greeting name="Songkran Festival" date="13-APR-2023" />
    </View>
  );
};

export default LotsOfGreetings;
