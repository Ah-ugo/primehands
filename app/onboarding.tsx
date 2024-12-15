import { View, Image, StyleSheet } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { Button, SizableText, YStack } from "tamagui";
// import { Image } from "react-native";

const CustomDot = ({ selected }: any) => {
  return (
    <View
      style={[
        styles.dot,
        { backgroundColor: selected ? "#08896A" : "#ccc" }, // Active and inactive dot colors
      ]}
    />
  );
};

export default function onboarding() {
  return (
    <Onboarding
      DotComponent={CustomDot}
      bottomBarColor="#fff"
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/images/rent.png")}
              // source={{ uri: "https://via.placeholder.com/100" }}
              alt="img1"
              style={{ width: 320, height: 320 }}
              resizeMode="cover"
            />
          ),
          title: "Short let Rentals",
          subtitle:
            "We've got you covered on short let rentals. Save at least 30% on your booking with caution fees waived",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              // source={require("../assets/images/notification.png")}
              source={require("../assets/images/5120967.jpg")}
              alt="img1"
              style={{ width: 320, height: 320 }}
              resizeMode="cover"
            />
          ),
          title: "Things to do",
          subtitle: "Discover activities and fun things to do near you",
        },

        {
          backgroundColor: "#fff",
          image: (
            <Image
              // source={require("../assets/images/7589190.jpg")}
              source={require("../assets/images/notification.png")}
              alt="img1"
              style={{ width: 320, height: 320 }}
              resizeMode="cover"
            />
          ),
          title: "Book in 5 clicks!",
          subtitle: (
            <View
              style={
                {
                  // display: "flex",
                  // justifyContent: "center",
                  // alignItems: "center",
                  // flexDirection: "column",
                  // marginHorizontal: 20,
                }
              }
            >
              <SizableText size="$6" textAlign="center" mx={20}>
                Select your space, pick dates & book now or pay later
              </SizableText>
              <YStack mt={20} mx={5} gap={10}>
                <Button backgroundColor={"#08896A"} color={"$color.gray2Light"}>
                  Sign up
                </Button>
                <Button borderColor={"#08896A"}>Sign in</Button>
              </YStack>
            </View>
          ),
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
});
