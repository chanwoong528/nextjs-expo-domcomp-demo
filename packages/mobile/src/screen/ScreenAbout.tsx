import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import AboutDom from "../widget/dom/AboutDom";

export default function ScreenAbout() {
  return (
    <SafeAreaView
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text>ScreenAbout</Text>
      <View
        style={{
          display: "flex",
          borderWidth: 10,
          borderColor: "blue",
          width: 100,
          height: 100,
        }}>
        <AboutDom dom={{ scrollEnabled: true }} />
      </View>
    </SafeAreaView>
  );
}
