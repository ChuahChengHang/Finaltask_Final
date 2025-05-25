import { Stack, router } from "expo-router";
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from "@react-native-firebase/auth";


export default function RootLayout() {
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const currentUser = auth().currentUser;
      const stored = await AsyncStorage.getItem("isLoggedIn");

      if (currentUser && stored === "true") {
        router.replace("/(auth)")
      }

      setAuthChecked(true);
    };

    checkLoginStatus();
  }, []);
  return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerTransparent: true, headerTitle: "", headerBackTitle: "Back" }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
  )
}
