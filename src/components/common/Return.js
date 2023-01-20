import {Image, TouchableOpacity} from 'react-native';
import { scale } from '../../helpers/functions';
import {images} from '../../themes';

const Return = ({onPress,style}) => {
  return (
    <TouchableOpacity style={[style,{width:scale(50),height:scale(40)}]} onPress={onPress}>
      <Image source={images.return} />
    </TouchableOpacity>
  );
};
export default Return;
