import { View } from "react-native";
import React from "react";
import {
  Avatar,
  Button,
  Checkbox,
  Image,
  Input,
  Label,
  Separator,
  SizableText,
  Text,
  XStack,
  YStack,
} from "tamagui";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Google } from "iconsax-react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function signUp() {
  return (
    <SafeAreaView className="px-4">
      <View
        className="mt-10 mb-10"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SizableText size={"$9"} style={{ fontFamily: "InterSemiBold" }}>
          Create Account
        </SizableText>
        <SizableText
          size={"$2"}
          style={{ fontFamily: "InterLight" }}
          color={"#AEACAC"}
        >
          Fill your details below, or register with social account
        </SizableText>
      </View>
      <View>
        <YStack>
          <Label htmlFor="name" style={{ fontFamily: "InterLight" }}>
            Username
          </Label>
          <Input
            size={"$4"}
            id="name"
            style={{ fontFamily: "InterReg" }}
            // flex={1}
            placeholder="Name"
          />
        </YStack>

        <YStack>
          <Label htmlFor="email" style={{ fontFamily: "InterLight" }}>
            Email
          </Label>
          <Input
            size={"$4"}
            id="email"
            style={{ fontFamily: "InterReg" }}
            // flex={1}
            placeholder="name@example.com"
          />
        </YStack>

        <YStack>
          <Label htmlFor="password" style={{ fontFamily: "InterLight" }}>
            Password
          </Label>
          <Input
            size={"$4"}
            id="password"
            style={{ fontFamily: "InterReg" }}
            // flex={1}
            placeholder="*************"
          />
        </YStack>
        <XStack mt={10} alignItems="center" gap={5}>
          <Checkbox size={"$3"}>
            <Checkbox.Indicator>
              <FontAwesome6 name="check" size={7} color="black" />
            </Checkbox.Indicator>
          </Checkbox>
          <SizableText style={{ fontSize: 14, fontFamily: "InterReg" }}>
            Accept
          </SizableText>
          <Link
            href={"/Splash"}
            style={{ color: "#F1510C", fontSize: 14, fontFamily: "InterReg" }}
          >
            terms and conditions
          </Link>
        </XStack>
        <Button
          color={"white"}
          fontWeight={"800"}
          backgroundColor={"#F1510C"}
          mt={20}
          style={{ fontFamily: "InterReg", color: "white" }}
        >
          Sign Up
        </Button>

        {/* <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        > */}
        <XStack mt={20} alignItems="center" gap={10}>
          <Separator borderColor={"#AEACAC"} />
          <SizableText
            size={"$2"}
            color={"#AEACAC"}
            style={{ fontFamily: "InterLight" }}
          >
            Or Sign up with
          </SizableText>
          {/* </View> */}
          <Separator borderColor={"#AEACAC"} />
        </XStack>
        <Button
          mt={20}
          fontWeight={"800"}
          borderColor={"#F1510C"}
          style={{ fontFamily: "InterReg" }}
          icon={<Google size="32" color="#F1510C" />}
        >
          Continue with Google
        </Button>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <XStack gap={3} mt={15} justifyContent="center" alignItems="center">
            <SizableText style={{ fontSize: 18, fontFamily: "InterReg" }}>
              Already have an account?
            </SizableText>
            <Link
              style={{ fontSize: 18, color: "#F1510C", fontFamily: "InterReg" }}
              href={"/signIn"}
            >
              Sign in
            </Link>
          </XStack>
        </View>
      </View>
    </SafeAreaView>
  );
}
