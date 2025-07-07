"use dom";
import React from "react";

import PageHome from "@next-expo-example/web/src/page/PageHome";
import "../../../global.css";

export default function HomeDom({}: { dom: import("expo/dom").DOMProps }) {
  return (
    <div className='flex-1'>
      <PageHome />
    </div>
  );
}

/**
 *  have to follow above structure,
 *  1. always import global.css
 *  2. always use export default function HomeDom and pass dom props
 *  3. "use dom" is required
 *  4. <div className='flex-1'> it does not matter either dom or native component,
    but have to make flex-1 or something that takes up full height and width  
*/
