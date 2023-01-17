import React, {useRef, useState} from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {scale} from '../../helpers/functions';
import {colors, images} from '../../themes';
import Buttons from '../common/Button';
import Description from '../common/Description';
import TitleSlide from '../common/TitleSlide';
const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.PaleBlue,
    flex: 1,
    paddingHorizontal: scale(25),
    paddingTop: scale(57),
  },
  buttonContainer: {
    backgroundColor: colors.LightGray,
    width: '100%',
    height: scale(60),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(15),
  },
  buttonText: {
    color: colors.DarkBlue,
    fontFamily: 'Inter-Regular',
    fontSize: scale(20),
    fontWeight: '500',
  },
});

const slides = [
  {
    key: 1,
    title: <TitleSlide>Checkup management</TitleSlide>,
    text: (
      <Description>
        Lorem ipsum dolor sit amet consectetur. Ut nunc vitae at et. Proin urna
        viverra sodales sociis congue ipsum.
      </Description>
    ),
    image: images.walkthrought1,
    backgroundColor: '#59b2ab',
    buttonText: 'Next',
  },
  {
    key: 2,
    title: <TitleSlide>Share reports with doctors</TitleSlide>,
    text: (
      <Description>
        Lorem ipsum dolor sit amet consectetur. Ut nunc vitae at et. Proin urna
        viverra sodales sociis congue ipsum.
      </Description>
    ),
    image: images.walkthrought2,
    backgroundColor: '#febe29',
    buttonText: 'Next',
  },
  {
    key: 3,
    title: <TitleSlide>Data protection</TitleSlide>,
    text: (
      <Description>
        Lorem ipsum dolor sit amet consectetur. Ut nunc vitae at et. Proin urna
        viverra sodales sociis congue ipsum.
      </Description>
    ),
    image: images.walkthrought3,
    backgroundColor: '#22bcb5',
    buttonText: "Let's",
  },
];
const Walkthrough = ({navigation}) => {
  const slider = useRef();
  const [showApp, setShowApp] = useState(false);
  _renderItem = ({item}) => {
    return (
      <View style={Styles.container}>
        <Image source={item.image} />
        <Text>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by control ling state
    setShowApp(true);
    navigation.navigate('Profile')
  };
  _renderNextButton = () => {
    return (
      <View style={Styles.buttonContainer}>
        <Text style={Styles.buttonText}>Next</Text>
      </View>
    );
  };
  _renderDoneButton=()=>{
    return(
      <View style={[Styles.buttonContainer,{backgroundColor:colors.DarkBlue}]}>
        <Text style={[Styles.buttonText,{color:colors.LightBlue}]}>Let's go</Text>
      </View>)
  }
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={colors.PaleBlue} barStyle="dark-content" />
      <AppIntroSlider
        ref={ref => (slider.current = ref)}
        onDone={_onDone}
        bottomButton
        renderItem={_renderItem}
        data={slides}
        renderNextButton={_renderNextButton}
        renderDoneButton={_renderDoneButton}
      />
    </View>
  );
};
export default Walkthrough;
