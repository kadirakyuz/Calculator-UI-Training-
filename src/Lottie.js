import { View, Text } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native";

export default function Lottie ()   {
  return ( 
    <LottieView
    style={{width:200,height:200}}
      source={require("./bb.json")}
      colorFilters={[
        {
          keypath: "button",
          color: "#F00000",
        },
        {
          keypath: "Sending Loader",
          color: "#F00000",
        },
      ]}
      autoPlay
      loop
    />
 )
}

