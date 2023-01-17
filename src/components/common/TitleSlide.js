import {StyleSheet, Text} from 'react-native';
import { scale } from '../../helpers/functions';
import { colors } from '../../themes';

const Styles = StyleSheet.create({
  container: {
    fontFamily: 'Gilroy-Bold',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: scale(24),
    lineHeight: scale(32),
    color:colors.Dark
  },
});
const TitleSlide = ({style,children}) => {
  return <Text style={[style, Styles.container]}>{children}</Text>;
};
export default TitleSlide;
