import { View, Text } from "react-native";
import React from "react";
import HomeDom from "../widget/dom/HomeDom";

export default function ScreenHome() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",

        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}>
      <Text style={{ color: "red" }}>ScreenHome</Text>
      <View
        style={{
          flex: 1,
          width: "100%",
          borderColor: "blue",
          borderWidth: 10,
        }}>
        <HomeDom dom={{ scrollEnabled: true }} />
      </View>
    </View>
  );
}
