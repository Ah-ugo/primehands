import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href={"/signIn"}>onboard</Link>
      <Text>Edit app/index.tsx to edit this scre.</Text>
    </View>
  );
}
