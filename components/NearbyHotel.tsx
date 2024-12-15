import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Card, SizableText, XStack } from "tamagui";
import { Location } from "iconsax-react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function NearbyHotel({ id }: any) {
  const router = useRouter();
  return (
    <Card
      style={{ backgroundColor: "#FFFFFF" }}
      py={"$3"}
      px={"$3"}
      elevate
      bordered
      animation={"bouncy"}
      scale={0.9}
      hoverStyle={{ scale: 0.925 }}
      pressStyle={{ scale: 0.875 }}
    >
      <Pressable onPress={() => router.push(`/(tabs)/(home)/${id}`)}>
        <XStack gap={"$3"} alignItems="center">
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
            />
          </View>

          <View style={{ width: "100%", flex: 1 }}>
            <XStack justifyContent="space-between" marginBottom={8}>
              <View style={styles.discountBadge}>
                <SizableText style={styles.discountText}>10% Off</SizableText>
              </View>

              <XStack alignItems="center">
                <Ionicons name="star" size={15} color="#FFC107" />
                <SizableText style={styles.ratingText}>4.8</SizableText>
              </XStack>
            </XStack>
            <SizableText style={styles.titleText}>Hotel Galaxy</SizableText>
            <XStack alignItems="center" marginBottom={8}>
              <Location size="20" color="#AEACAC" />
              <SizableText style={styles.locationText}>
                New York, USA
              </SizableText>
            </XStack>
            <XStack>
              <SizableText style={styles.priceText}>N12000</SizableText>
              <SizableText style={styles.dayText}> /day</SizableText>
            </XStack>
          </View>
        </XStack>
      </Pressable>
    </Card>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    // marginBottom: 10,
    maxWidth: 138,
  },
  image: {
    width: "100%",
    height: 108,
    borderRadius: 10,
    objectFit: "cover",
  },
  discountBadge: {
    backgroundColor: "#FFF5F0",
    borderRadius: 2,
    paddingHorizontal: 4,
    paddingVertical: 2,
    // flexGrow: 1,
    flexWrap: "wrap",
  },
  discountText: {
    fontSize: 10,
    fontFamily: "InterMed",
    color: "#F1510C",
  },
  ratingText: {
    fontSize: 12,
    fontFamily: "InterMed",
    color: "#FF3D00",
    // marginLeft: 4,
  },
  titleText: {
    fontSize: 14,
    fontFamily: "InterMed",
    marginBottom: 8,
  },
  locationText: {
    fontSize: 10,
    fontFamily: "InterMed",
    color: "#AEACAC",
    // marginLeft: 4,
  },
  priceText: {
    fontSize: 14,
    fontFamily: "InterMed",
    color: "#F1510C",
  },
  dayText: {
    fontSize: 10,
    color: "#AEACAC",
    fontFamily: "InterMed",
    // marginLeft: 4,
  },
});
