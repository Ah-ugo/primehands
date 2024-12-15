import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar } from "react-native-paper";
import {
  Avatar,
  Button,
  H3,
  Input,
  Sheet,
  SizableText,
  Stack,
  XStack,
  YStack,
} from "tamagui";
import {
  ArrowDown2,
  Location,
  SearchNormal,
  ArrowDown,
} from "iconsax-react-native";
import { Link } from "expo-router";
import RecommendeCard from "@/components/RecommendeCard";
import RecommendedLodges from "@/components/RecommendedLodges";
import NearbyHotel from "@/components/NearbyHotel";
import locationData from "@/utils/data.json"; // Update the path based on your project structure

export default function Home() {
  const [open, setOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Select Location");
  const [expandedState, setExpandedState] = useState(null);

  const handleStateClick = (state: any) => {
    setExpandedState(expandedState === state ? null : state); // Toggle dropdown for states
  };

  const handleLGASelection = (lga: any, state: any) => {
    setSelectedLocation(`${lga}, ${state}`);
    setOpen(false); // Close the bottom sheet after selection
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
      {/* Header Section */}
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
          <XStack alignItems="center" gap={5}>
            <Location size="30" color="#F1510C" />
            <Pressable
              style={{ paddingVertical: 10 }}
              onPress={() => setOpen(true)}
            >
              <XStack gap={5} alignItems="center">
                <SizableText style={{ fontSize: 16, fontFamily: "InterMed" }}>
                  {selectedLocation}
                </SizableText>
                <ArrowDown2 size={15} color="black" />
              </XStack>
            </Pressable>
          </XStack>
          <Avatar size="$3" radiused={true}>
            <Avatar.Image
              accessibilityLabel="Cam"
              src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
            />
            <Avatar.Fallback backgroundColor="$blue10" />
          </Avatar>
        </XStack>
      </Appbar.Header>

      {/* Search Input */}
      <XStack
        height={40}
        mt={15}
        mb={10}
        marginHorizontal="$4"
        alignItems="center"
      >
        <Input
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          flex={1}
          placeholder="Search..."
          paddingLeft={50}
          height={40}
          borderColor={"#F1510C"}
        />
        <Stack
          position="absolute"
          left={0}
          bottom={0}
          height={40}
          width={40}
          alignItems="center"
          justifyContent="center"
        >
          <SearchNormal size="24" color="#F1510C" />
        </Stack>
      </XStack>

      {/* Sections */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Recommended Hotels */}
        <Section title="Recommended Hotel">
          <RecommendeCard />
          <RecommendeCard />
          <RecommendeCard />
          <RecommendeCard />
        </Section>
        {/* Recommended Lodges */}
        <Section title="Recommended Lodges">
          <RecommendedLodges />
          <RecommendedLodges />
          <RecommendedLodges />
          <RecommendedLodges />
        </Section>
        {/* Nearby Hotels */}
        <View>
          <XStack justifyContent="space-between" mx={"$4"} mt={"$5"}>
            <SizableText style={{ fontSize: 16, fontFamily: "InterMed" }}>
              Nearby Hotels
            </SizableText>
            <Link
              href={"/signIn"}
              style={{ color: "#F1510C", fontSize: 12, fontFamily: "InterMed" }}
            >
              See all
            </Link>
          </XStack>
          <YStack mx={"$4"} mt={"$5"} gap={"$3"}>
            <NearbyHotel />
            <NearbyHotel />
            <NearbyHotel />
            <NearbyHotel />
          </YStack>
        </View>
      </ScrollView>

      {/* Bottom Sheet */}
      <Sheet
        modal
        open={open}
        forceRemoveScrollEnabled={open}
        onOpenChange={setOpen}
        snapPoints={[30, 60]}
        dismissOnSnapToBottom
        animation="medium"
      >
        <Sheet.Handle />
        <Sheet.Frame paddingHorizontal={"$3"}>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            <H3 style={{ textAlign: "center" }}>Select Location</H3>
          </View>
          <ScrollView style={{ marginVertical: 0 }}>
            {locationData.map((state) => (
              <View key={state.name} style={{ marginBottom: 10 }}>
                {/* State Section */}
                <Pressable
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    backgroundColor: "#F1F1F1",
                    borderRadius: 5,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  onPress={() => handleStateClick(state.name)}
                >
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    {state.name}
                  </Text>
                  <ArrowDown size={16} color="black" />
                </Pressable>

                {/* LGA Section */}
                {expandedState === state.name && (
                  <View
                    style={{
                      marginTop: 5,
                      paddingLeft: 20,
                    }}
                  >
                    {state.lgas.map((lga) => (
                      <Pressable
                        key={lga}
                        onPress={() => handleLGASelection(lga, state.name)}
                        style={{
                          paddingVertical: 8,
                          backgroundColor: "#FFF",
                          borderBottomColor: "#DDD",
                          borderBottomWidth: 1,
                        }}
                      >
                        <Text style={{ fontSize: 14 }}>{lga}</Text>
                      </Pressable>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </ScrollView>
        </Sheet.Frame>
      </Sheet>
    </SafeAreaView>
  );
}

function Section({ title, children }: any) {
  return (
    <>
      <XStack justifyContent="space-between" mx={"$4"} mt={"$5"}>
        <SizableText style={{ fontSize: 16, fontFamily: "InterMed" }}>
          {title}
        </SizableText>
        <Link
          href={"/signIn"}
          style={{ color: "#F1510C", fontSize: 12, fontFamily: "InterMed" }}
        >
          See all
        </Link>
      </XStack>
      <ScrollView
        style={{ backgroundColor: "#FFFFFF" }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <XStack gap={"$4"} mx={"$4"} mt={"$5"}>
          {children}
        </XStack>
      </ScrollView>
    </>
  );
}
