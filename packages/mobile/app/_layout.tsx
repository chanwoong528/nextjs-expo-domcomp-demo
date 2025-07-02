import { Link, Stack } from "expo-router";

import { SafeAreaView } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1, borderWidth: 10, borderColor: "green" }}>
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: true }} />
        <Stack.Screen name='about' options={{ headerShown: true }} />
      </Stack>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
    </SafeAreaView>
  );
}
