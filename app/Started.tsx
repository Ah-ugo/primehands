import { View, Text } from "react-native";
import React from "react";
import { Avatar, Button, SizableText } from "tamagui";
import { ArrowRight } from "iconsax-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Started() {
  return (
    <SafeAreaView className="flex-1">
      <View
        className="mt-14"
        style={{
          display: "flex",
          flex: 1,
          //   flexDirection: "column",
          //   justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar circular size={"$20"} elevate={true} elevation={50}>
          <Avatar.Image
            accessibilityLabel="Cam"
            src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
          />
          <Avatar.Fallback backgroundColor="$blue10" />
        </Avatar>
        <SizableText
          style={{
            fontSize: 22,
            fontFamily: "InterSemiBold",
            textAlign: "center",
            // marginHorizontal: 40,
            marginTop: 30,
            width: 266,
          }}
          color={"#000000"}
          //   className="mt-10"
          fontFamily={"InterSemiBold"}
        >
          Find Your Perfect Place to stay
        </SizableText>
      </View>
      <View className="flex justify-center items-center mb-10">
        <Button
          color={"white"}
          backgroundColor={"#F1510C"}
          style={{ fontSize: 18 }}
          // flexWrap="nowrap"
          iconAfter={<ArrowRight size="32" color="white" />}
        >
          Get Started
        </Button>
      </View>
    </SafeAreaView>
  );
}
