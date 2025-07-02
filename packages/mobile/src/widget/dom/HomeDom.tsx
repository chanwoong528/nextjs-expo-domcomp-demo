"use dom";
import React from "react";

import PageHome from "@next-expo-example/web/src/page/PageHome";
import "../../../global.css";
import { View } from "react-native";

export default function HomeDom({}: { dom: import("expo/dom").DOMProps }) {
  return (
    // <View style={{ flex: 1, width: "100%" }}>
    <div className='flex-1'>
      <PageHome />
    </div>
    // </View>
  );
}
