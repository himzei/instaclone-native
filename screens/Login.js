import React from "react";
import { TouchableOpacity } from "react-native";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

export default function LogIn({ navigation }) {
  return (
    <AuthLayout>
      <TextInput
        placeholder="username"
        returnKeyType="next"
        placeholderTextColor={"rgba(255, 255, 255, 0.4)"}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        returnKeyType="done"
        lastOne={true}
        placeholderTextColor={"rgba(255, 255, 255, 0.4)"}
      />
    </AuthLayout>
  );
}
