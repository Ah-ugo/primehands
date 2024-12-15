import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar } from "react-native-paper";
import { Button, Card, SizableText, XStack, YStack } from "tamagui";
import { ArrowLeft } from "iconsax-react-native";
import NearbyHotel from "@/components/NearbyHotel";

export default function favourite() {
  return (
    <SafeAreaView style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
      <Appbar.Header
        statusBarHeight={0}
        style={{ backgroundColor: "transparent" }}
      >
        <XStack
          alignItems="center"
          justifyContent="space-between"
          width={"100%"}
          paddingHorizontal={"$3"}
        >
          <Button
            style={{ backgroundColor: "#FFFFFF", borderRadius: "50%" }}
            width={40}
            height={40}
            // Adjust the size and color as needed
            elevate
            animation="bouncy"
            // scale={0.9}
            hoverStyle={{ scale: 0.925 }}
            pressStyle={{ scale: 0.875 }}
          >
            <ArrowLeft
              size={20}
              color="#000000"
              style={{ alignSelf: "center" }}
            />
          </Button>

          <SizableText style={{ fontSize: 16, fontFamily: "InterMed" }}>
            Favourites
          </SizableText>

          <View></View>
        </XStack>
      </Appbar.Header>

      <ScrollView showsVerticalScrollIndicator={false}>
        <YStack mx={"$4"} mt={"$5"} gap={"$3"}>
          <NearbyHotel />
          <NearbyHotel />
          <NearbyHotel />
        </YStack>
      </ScrollView>
    </SafeAreaView>
  );
}
