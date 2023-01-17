import {StyleSheet, Text} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    fontFamily: 'Inter-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
  },
});
const Description = ({style,children}) => {
  return <Text style={[Styles.container, style]}>{children}</Text>;
};
export default Description;
