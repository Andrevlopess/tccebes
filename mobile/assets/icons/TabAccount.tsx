import React from "react";
import Svg, { Path } from "react-native-svg";

export default function TabAccount({
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
        d="M12.8333 22C18.3562 22 22.8333 17.5228 22.8333 12C22.8333 6.47715 18.3562 2 12.8333 2C7.31047 2 2.83331 6.47715 2.83331 12C2.83331 17.5228 7.31047 22 12.8333 22Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.8333 14C15.0425 14 16.8333 12.2091 16.8333 10C16.8333 7.79086 15.0425 6 12.8333 6C10.6242 6 8.83331 7.79086 8.83331 10C8.83331 12.2091 10.6242 14 12.8333 14Z"
        fill="white"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.8333 23C18.8333 21.4087 18.2012 19.8826 17.076 18.7574C15.9507 17.6321 14.4246 17 12.8333 17C11.242 17 9.7159 17.6321 8.59068 18.7574C7.46546 19.8826 7 21.4087 7 23"
        fill="white"
      />
      <Path
        d="M18.8333 23C18.8333 21.4087 18.2012 19.8826 17.076 18.7574C15.9507 17.6321 14.4246 17 12.8333 17C11.242 17 9.7159 17.6321 8.59068 18.7574C7.46546 19.8826 7 21.4087 7 23"
        stroke="white"
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
        d="M18.8333 20C18.8333 18.4087 18.2012 16.8826 17.076 15.7574C15.9507 14.6321 14.4246 14 12.8333 14C11.242 14 9.71589 14.6321 8.59067 15.7574C7.46545 16.8826 6.83331 18.4087 6.83331 20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.8333 14C15.0425 14 16.8333 12.2091 16.8333 10C16.8333 7.79086 15.0425 6 12.8333 6C10.6242 6 8.83331 7.79086 8.83331 10C8.83331 12.2091 10.6242 14 12.8333 14Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.8333 22C18.3562 22 22.8333 17.5228 22.8333 12C22.8333 6.47715 18.3562 2 12.8333 2C7.31047 2 2.83331 6.47715 2.83331 12C2.83331 17.5228 7.31047 22 12.8333 22Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
