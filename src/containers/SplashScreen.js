import { useCallback, useEffect } from 'react';
import {Image, StatusBar, StyleSheet, View} from 'react-native';
import colors from '../themes/colors';
import images from '../themes/images';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.DarkBlue,
  },
});
const SplashScreen = ({navigation}) => {
    const checkConnection = useCallback(() => {
        setTimeout(() => {
              navigation.navigate('Walkthrought')   
        }, 1000);
      }, [navigation]);
    useEffect(() => {
        checkConnection()
    }, [])
    
  return (
    <View style={Styles.container}>
    {/* <StatusBar hidden  /> */}
      <Image source={images.logo} />
      {/* <Text style={styles.text}>APRI TRADE</Text>
      <Text style={styles.subText}>BY APRIUM</Text> */}
    </View>
  );
};
export default SplashScreen;
