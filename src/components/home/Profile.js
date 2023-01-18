import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import ModalContainer from '../../containers/ModalContainer';
import {scale} from '../../helpers/functions';
import {colors} from '../../themes';
const Styles = StyleSheet.create({});
const Profile = () => {
  return (
    <ModalContainer>
      <ModalContainer.Header
        style={{
          justifyContent: 'flex-start',
        }}
        progress={0.5}
      />
      <ModalContainer.Wrapper
        title="Create your profile 1/3"
        description="Personal information"
      />
    </ModalContainer>
    // <View style={[Styles.GlobalContainer]}>
    //   <View style={{height:scale(55),flexDirection:'row',alignItems:'center',justifyContent:'flex-start',paddingHorizontal:scale(18)}} >
    //     <Return style={{marginRight:scale(22)}} />
    //     <ProgressBar width={scale(280)} progress={0.5} color={colors.DarkBlue} height={8} borderColor={'white'} style={{backgroundColor:'white',borderRadius:10}}  />
    //   </View>
    //   <View style={[Styles.Wrapper]}>
    //     {/* <View>
    //
    //     </View> */}
    //     {/* <View style={[Styles.SubWrapper]}>
    //       <View>
    //         <View>
    //           <Text>Username</Text>
    //           <TextInput placeholder="User name" />
    //           <Text>Password</Text>
    //           <TextInput placeholder="password" />
    //         </View>
    //       </View>
    //     </View> */}
    //   </View>
    // </View>
  );
};
export default Profile;
