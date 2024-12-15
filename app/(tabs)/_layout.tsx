import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Heart, Home3, UserSquare } from "iconsax-react-native";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{ tabBarActiveTintColor: "#F1510C", headerShown: false }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home3 size="28" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          title: "Favourite",
          tabBarIcon: ({ color }) => <Heart size="28" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <UserSquare size="28" color={color} />,
        }}
      />
    </Tabs>
  );
}
