import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import { View } from "react-native";
import TabIcon from "../components/nav/TabIcon";

const Tabs = createBottomTabNavigator();

export default function LoggedInNav() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "white",
        showLabel: false,
        style: {
          backgroundColor: "black",
          borderTopColor: "rgba(255, 255, 255, 0.2)",
        },
      }}
    >
      <Tabs.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"home"} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"search"} color={color} focused={focused} />
          ),
        }}
        name="Search"
        component={Search}
      />
      <Tabs.Screen
        name="Camera"
        component={View}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"camera"} color={color} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"heart"} color={color} focused={focused} />
          ),
        }}
        name="Notifications"
        component={Notifications}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"person"} color={color} focused={focused} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tabs.Navigator>
  );
}
