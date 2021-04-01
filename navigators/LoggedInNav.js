import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabsNav from "./TabsNav";
import UploadNav from "./UploadNav";
import { Ionicons } from "@expo/vector-icons";
import UploadForm from "../screens/UploadForm";

const Stack = createStackNavigator();

export default function LoggedInNav() {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Tabs"
        options={{ headerShown: false }}
        component={TabsNav}
      />
      <Stack.Screen
        name="Upload"
        options={{ headerShown: false }}
        component={UploadNav}
      />
      <Stack.Screen
        name="UploadForm"
        options={{
          headerBackTitleVisible: false,
          headerBackImage: ({ tintColor }) => (
            <Ionicons name="close" size={20} color={tintColor} />
          ),
          title: "Upload",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "black",
          },
        }}
        component={UploadForm}
      />
    </Stack.Navigator>
  );
}
