import { Stack, Tabs } from "expo-router";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Open debugger to view warnings"])
export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Votes", headerShown: false}}/>
      <Tabs.Screen name="voting" options={{ title: "Voting", headerShown: false}}/>
    </Tabs>
  );
}
