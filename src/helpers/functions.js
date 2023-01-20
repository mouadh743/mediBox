import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const baselineHeight = 812;
const baselineWidth = 375;
const scaleSize = (width + height) / (baselineHeight + baselineWidth);
// Scales the item based on the screen height and baselineHeight

export const scale = value => (scaleSize * value);
