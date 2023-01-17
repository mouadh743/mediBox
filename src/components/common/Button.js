import React from 'react';
import {Button, StyleSheet} from 'react-native';
import { scale } from '../../helpers/functions';
import Icon from './Icon';

const Styles = StyleSheet.create({
  container: {
    width:'100%',
    height:scale(60),
    justifyContent:'center',
    alignItems:'center',
    borderRadius: scale(15),
  },
});
const Buttons = ({style, onPress, icon, iconStyle, children, disabled}) => {
  return (
    <Button
    title={children}
      disabled={disabled}
      style={[Styles.container, style]}
      onPress={onPress}/>
  );
};
export default Buttons;
