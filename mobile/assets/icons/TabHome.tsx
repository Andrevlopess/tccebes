import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function TabHome({ color, focused }: { color: string; focused: boolean }) {
  return focused ? (
    <Svg width="21" height="22" viewBox="0 0 21 22" fill="none">
      <Path
        d="M1.16669 8L10.1667 1L19.1667 8V19C19.1667 19.5304 18.956 20.0391 18.5809 20.4142C18.2058 20.7893 17.6971 21 17.1667 21H13.1667V14H10.1667H6.66669V21H3.16669C2.63625 21 2.12755 20.7893 1.75247 20.4142C1.3774 20.0391 1.16669 19.5304 1.16669 19V8Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ) : (
    <Svg width="21" height="22" viewBox="0 0 21 22" fill="none">
      <Path
        d="M1.16669 8L10.1667 1L19.1667 8V19C19.1667 19.5304 18.956 20.0391 18.5809 20.4142C18.2058 20.7893 17.6971 21 17.1667 21H13.1667V14H10.1667H6.66669V21H3.16669C2.63625 21 2.12755 20.7893 1.75247 20.4142C1.3774 20.0391 1.16669 19.5304 1.16669 19V8Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
