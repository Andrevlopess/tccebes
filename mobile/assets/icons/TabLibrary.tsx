import React from "react";
import Svg, { Path } from "react-native-svg";

export default function TabLibrary({
  color,
  focused,
}: {
  color: string;
  focused: boolean;
}) {
  return focused ? (
    <Svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
    >
      <Path
        d="M4.5 19.5V4.5C4.5 3.83696 4.76339 3.20107 5.23223 2.73223C5.70107 2.26339 6.33696 2 7 2H20.5V22H7C6.33696 22 5.70107 21.7366 5.23223 21.2678C4.76339 20.7989 4.5 20.163 4.5 19.5ZM4.5 19.5C4.5 18.837 4.76339 18.2011 5.23223 17.7322C5.70107 17.2634 6.33696 17 7 17H20.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.5 2V10L13.5 7L16.5 10V2"
        fill={color}
      />
      <Path
        d="M10.5 2V10L13.5 7L16.5 10V2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ) : (
    <Svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
    >
      <Path
        d="M4.5 19.5V4.5C4.5 3.83696 4.76339 3.20107 5.23223 2.73223C5.70107 2.26339 6.33696 2 7 2H20.5V22H7C6.33696 22 5.70107 21.7366 5.23223 21.2678C4.76339 20.7989 4.5 20.163 4.5 19.5ZM4.5 19.5C4.5 18.837 4.76339 18.2011 5.23223 17.7322C5.70107 17.2634 6.33696 17 7 17H20.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.5 2V10L13.5 7L16.5 10V2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
