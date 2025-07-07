"use dom";

import React from "react";
import "../../../global.css";

export default function AboutDom({}: { dom: import("expo/dom").DOMProps }) {
  return (
    <div className='flex-1'>
      <h1>AboutDom</h1>
    </div>
  );
}
