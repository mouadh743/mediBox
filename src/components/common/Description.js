import {StyleSheet, Text} from 'react-native';
import { scale } from '../../helpers/functions';

const Styles = StyleSheet.create({
  container: {
    fontFamily: 'Inter-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize:scale(14),
    lineHeight: scale(18),
  },
});
const Description = ({style,children}) => {
  return <Text style={[Styles.container, style]}>{children}</Text>;
};
export default Description;
