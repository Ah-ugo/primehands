import { View, Text } from "react-native";
import React from "react";
import { H3, Image, SizableText } from "tamagui";

export default function Splash() {
  return (
    <View style={{ backgroundColor: "#F1510C", flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/15560191.png")}
          style={{ width: 146.22, height: 150 }}
        />
        {/* <SizableText size="$4" fontWeight="800">
          Hotel Booking
        </SizableText> */}
        <H3
          style={{
            fontFamily: "InterMed",
            fontWeight: "600",
          }}
          color={"white"}
          fontFamily={"InterMed"}
          marginTop={20}
          //   lineHeight={"auto"}
          fontWeight={"600"}
        >
          Hotel Booking
        </H3>
      </View>
    </View>
  );
}
