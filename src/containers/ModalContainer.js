import {StatusBar, StyleSheet, View} from 'react-native';
import {scale} from '../helpers/functions';
import {colors} from '../themes';
const Styles = StyleSheet.create({
  GlobalContainer: {
    backgroundColor: colors.PaleBlue,
    flex:1,
    width:'100%'
  },
  Wrapper: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: scale(17),
    paddingBottom: scale(19),
    paddingTop: scale(28),
    borderTopLeftRadius: scale(15),
    borderTopRightRadius: scale(15),
  },
  SubWrapper: {
    backgroundColor: colors.PaleBlue,
    padding: scale(8),
    borderRadius: scale(15),
    marginTop: scale(23),
    height:'90%'
  },
});
const ModalContainer = ({Header, Title, Content}) => {
  return (
    <View style={[Styles.GlobalContainer]}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      {Header}
      <View style={[Styles.Wrapper]}>
        {Title}
        <View style={[Styles.SubWrapper]}>{Content}</View>
      </View>
    </View>
  );
};
export default ModalContainer;
