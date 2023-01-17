import {Image, StyleSheet} from 'react-native';

const Styles=StyleSheet.create({
    icon:{}
})
const Icon = ({icon,style}) => {
  return (
    <Image style={[Styles.icon, style]} source={icon} resizeMode="contain" />
  );
};
export default Icon;
