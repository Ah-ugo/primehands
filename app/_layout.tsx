import { config } from "@tamagui/config/v3";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { createTamagui, TamaguiProvider } from "tamagui";
import * as SplashScreen from "expo-splash-screen";
import Splash from "./Splash";
import { PaperProvider } from "react-native-paper";

SplashScreen.preventAutoHideAsync();

const tamaguiConfig = createTamagui(config);

type Conf = typeof tamaguiConfig;
declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends Conf {}
}

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    InterBlack: require("../assets/fonts/static/Inter_24pt-Black.ttf"),
    InterBold: require("../assets/fonts/static/Inter_24pt-Bold.ttf"),
    InterLight: require("../assets/fonts/static/Inter_24pt-Light.ttf"),
    InterMed: require("../assets/fonts/static/Inter_24pt-Medium.ttf"),
    InterReg: require("../assets/fonts/static/Inter_24pt-Regular.ttf"),
    InterSemiBold: require("../assets/fonts/static/Inter_24pt-SemiBold.ttf"),
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data or other tasks
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the timeout as needed
  }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <PaperProvider>
      <TamaguiProvider config={tamaguiConfig}>
        {/* <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}> */}
        {isLoading ? (
          <Splash />
        ) : (
          <Stack>
            <Stack.Screen
              name="index"
              options={{ headerShown: false }}
              redirect
            />
            <Stack.Screen name="signIn" options={{ headerShown: false }} />
            <Stack.Screen name="signUp" options={{ headerShown: false }} />
            <Stack.Screen name="Started" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            {/* <Stack.Screen name="[id]" options={{ headerShown: false }} /> */}
            {/* <Stack.Screen name="+not-found" /> */}
          </Stack>
        )}
        <StatusBar style="auto" />
        {/* </ThemeProvider> */}
      </TamaguiProvider>
    </PaperProvider>
  );
}
