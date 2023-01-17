import {Image, TouchableOpacity} from 'react-native';
import {images} from '../../themes';

const Return = ({onPress,style}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Image source={images.return} />
    </TouchableOpacity>
  );
};
export default Return;
