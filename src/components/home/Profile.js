import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
// import ModalContainer from '../../containers/ModalContainer';
import {scale} from '../../helpers/functions';
import {colors, images} from '../../themes';
import Description from '../common/Description';
import Return from '../common/Return';
import TitleWrapper from '../common/TitleWrapper';
const Styles = StyleSheet.create({
  GlobalContainer: {
    backgroundColor: colors.PaleBlue,
    flex: 1,
    width: '100%',
  },
  Wrapper: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: scale(17),
    paddingBottom: scale(19),
    paddingTop: scale(28),
    borderTopLeftRadius: scale(30),
    borderTopRightRadius: scale(30),
    height:scale(710),
    marginTop:15
  },
  SubWrapper: {
    backgroundColor: colors.PaleBlue,
    padding: scale(8),
    borderRadius: scale(15),
    marginTop: scale(23),
  },
});
const Profile = () => {
  return (
    <View style={[Styles.GlobalContainer]}>
      <View style={{height:scale(55),flexDirection:'row',alignItems:'center',justifyContent:'flex-start',paddingHorizontal:scale(18)}} >
        <Return style={{marginRight:scale(22)}} />
        <ProgressBar width={scale(280)} progress={0.5} color={colors.DarkBlue} height={8} borderColor={'white'} style={{backgroundColor:'white',borderRadius:10}}  />
      </View>
      <View style={[Styles.Wrapper]}>
        {/* <View>
          <TitleWrapper>Create your profile 1/3</TitleWrapper>
          <Description>Personal information</Description>
        </View> */}
        {/* <View style={[Styles.SubWrapper]}>
          <View>
            <View>
              <Text>Username</Text>
              <TextInput placeholder="User name" />
              <Text>Password</Text>
              <TextInput placeholder="password" />
            </View>
          </View>
        </View> */}
      </View>
    </View>
  );
};
export default Profile;
