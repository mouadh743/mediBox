import { Dimensions } from "react-native";

const window = Dimensions.get('window');
const baselineHeight = 812;
const baselineWidth = 375;

// The vertical resolution of the screen.
const screenHeight = window.height;

// The horizontal resolution of the screen.
const screenWidth = window.width;

const scaleSize =
  (screenHeight + screenWidth) / 2 / ((baselineHeight + baselineWidth) / 2);
// Scales the item based on the screen height and baselineHeight

export const scale = value => Math.floor(scaleSize * value * 0.95);