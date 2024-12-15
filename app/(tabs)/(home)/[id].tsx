import React, { useState } from "react";
import {
  Stack,
  XStack,
  YStack,
  SizableText,
  Avatar,
  Button,
  Image,
  Sheet,
  Input,
} from "tamagui";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  ArrowLeft,
  Heart,
  ShoppingCart,
  Star,
  Minus,
  Add,
  ArrowRight,
  Location,
  TickSquare,
} from "iconsax-react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { ScrollView, TouchableNativeFeedback } from "react-native";

const SIZES = ["XS", "S", "M", "L", "XL", "XXL", "3XL"];

const DetailsScreen = () => {
  const insets = useSafeAreaInsets();
  const [count, setCount] = useState(1);
  const [size, setSize] = useState(SIZES[0]);
  const [sheetOpen, setSheetOpen] = useState(true);

  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const handleBackPress = () => navigation.goBack();

  const handleSizeSelection = (selectedSize: any) => setSize(selectedSize);

  return (
    <YStack flex={1}>
      {/* Product Image */}
      <Image
        src="https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        height="60%"
        width="100%"
      />

      {/* Header */}
      <YStack
        position="absolute"
        top={insets.top}
        left={0}
        right={0}
        zIndex={1}
        padding="$4"
      >
        <XStack justifyContent="space-between" alignItems="center">
          <Button
            size="$4"
            borderRadius="$full"
            icon={<ArrowLeft size={25} color="gray" />}
            onPress={() => handleBackPress()}
          />
          <XStack gap="$3">
            <Button
              size="$4"
              borderRadius="$full"
              icon={<Heart size={25} color="gray" />}
            />
          </XStack>
        </XStack>
      </YStack>

      {/* Bottom Sheet */}
      <Sheet
        modal
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        snapPoints={[44, 500]}
        animation="medium"
      >
        <Sheet.Frame padding="$4">
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: 80 }}
          >
            <XStack
              style={{ width: "100%" }}
              alignItems="center"
              justifyContent="space-between"
            >
              <YStack>
                <SizableText size="$5" style={{ fontFamily: "InterBlack" }}>
                  Hotel Galaxy
                </SizableText>
                <XStack alignItems="center" gap={3}>
                  <Location color="#F1510C" size={14.22} />
                  <SizableText
                    color={"#8B939F"}
                    style={{ fontSize: 14.22, fontFamily: "InterLight" }}
                  >
                    Owerri, Imo State
                  </SizableText>
                </XStack>
              </YStack>
              <YStack>
                <SizableText size={"$5"} style={{ fontFamily: "InterMed" }}>
                  N30,000
                </SizableText>
                <XStack alignItems="center" gap="$2">
                  <XStack>
                    {new Array(5).fill("").map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        color={i < 3 ? "#FACC15" : "#DDD"}
                      />
                    ))}
                  </XStack>
                  <SizableText size="$2" style={{ fontFamily: "InterLight" }}>
                    3.0
                  </SizableText>
                </XStack>
              </YStack>
            </XStack>
            <YStack gap="$4">
              {/* Description */}
              <YStack marginTop={"$3"}>
                <XStack justifyContent="space-between" marginBottom="$1.5">
                  <SizableText size="$4" style={{ fontFamily: "InterBold" }}>
                    Description
                  </SizableText>

                  <TouchableNativeFeedback>
                    <SizableText
                      size="$2"
                      color={"#F1510C"}
                      style={{ fontFamily: "InterLight" }}
                    >
                      Read More
                    </SizableText>
                  </TouchableNativeFeedback>
                </XStack>
                <SizableText
                  size="$2"
                  style={{ fontFamily: "InterLight" }}
                  numberOfLines={3}
                >
                  Aute magna dolore sint ipsum dolor fugiat. Ad magna ad elit
                  labore culpa sunt sint laboris consectetur sunt. Lorem
                  excepteur occaecat reprehenderit nostrud culpa ad ex
                  exercitation tempor.
                </SizableText>
              </YStack>

              {/* Facilities */}
              <YStack marginTop="$4">
                <SizableText size="$4" style={{ fontFamily: "InterBold" }}>
                  Facilities
                </SizableText>
                <YStack marginTop="$2" gap="$2">
                  {[
                    "Free Wi-Fi",
                    "24/7 Power Supply",
                    "Swimming Pool",
                    "Gym Access",
                    "Parking Space",
                  ].map((facility, index) => (
                    <XStack key={index} alignItems="center" gap="$3">
                      <TickSquare size={18} color="#F1510C" />
                      <SizableText
                        size="$2"
                        style={{ fontFamily: "InterLight" }}
                      >
                        {facility}
                      </SizableText>
                    </XStack>
                  ))}
                </YStack>
              </YStack>
            </YStack>
          </ScrollView>
          <Button
            size="$5"
            backgroundColor="#F1510C"
            position="absolute"
            bottom={insets.bottom + 10}
            left={10}
            right={10}
            borderRadius="$full"
            color={"white"}
            onPress={() => alert("Book now!")}
          >
            Book Now
          </Button>
        </Sheet.Frame>
      </Sheet>
    </YStack>
  );
};

export default DetailsScreen;
