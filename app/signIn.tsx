import { View } from "react-native";
import React from "react";
import {
  Avatar,
  Button,
  Image,
  Input,
  Label,
  Separator,
  SizableText,
  Text,
  XStack,
  YStack,
} from "tamagui";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Google } from "iconsax-react-native";

export default function signIn() {
  const router = useRouter();
  return (
    <SafeAreaView className="px-4">
      <View
        className="mt-20 mb-10"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SizableText size={"$9"} style={{ fontFamily: "InterSemiBold" }}>
          Sign In
        </SizableText>
        <SizableText
          size={"$2"}
          style={{ fontFamily: "InterLight" }}
          color={"#AEACAC"}
        >
          Hi Welcome! Continue to login
        </SizableText>
      </View>
      <View>
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
        <XStack alignItems="flex-end" justifyContent="flex-end" mt={10}>
          <Link
            href={"/Splash"}
            style={{ color: "#F1510C", fontSize: 14, fontFamily: "InterReg" }}
          >
            Forgot Password
          </Link>
        </XStack>
        <Button
          onPress={() => {
            router.replace("/(tabs)/(home)/home");
          }}
          color={"white"}
          fontWeight={"800"}
          backgroundColor={"#F1510C"}
          mt={20}
          style={{ fontFamily: "InterReg", color: "white" }}
        >
          Sign in
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
            Or Sign in with
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
              Don’t have an account?
            </SizableText>
            <Link
              style={{ fontSize: 18, color: "#F1510C", fontFamily: "InterReg" }}
              href={"/signUp"}
            >
              Sign up
            </Link>
          </XStack>
        </View>
      </View>
    </SafeAreaView>
  );
}
