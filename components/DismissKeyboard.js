import { KeepAwake } from "expo";
import React from "react";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";

export default function DismissKeyboard({ children }) {
  const DismissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={DismissKeyboard}
      disabled={Platform.OS === "web"}
    >
      {children}
    </TouchableWithoutFeedback>
  );
}
