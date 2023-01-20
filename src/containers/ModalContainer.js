import {StatusBar, StyleSheet, Text, View} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import Description from '../components/common/Description';
import Return from '../components/common/Return';
import TitleWrapper from '../components/common/TitleWrapper';
import {scale} from '../helpers/functions';
import {colors} from '../themes';
const Styles = StyleSheet.create({
  GlobalContainer: {
    backgroundColor: colors.PaleBlue,
    flex: 1,
    width: '100%',
  },
  Header: {
    height: scale(40),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(18),
  },
  Wrapper: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: scale(17),
    paddingBottom: scale(19),
    paddingTop: scale(28),
    borderTopLeftRadius: scale(15),
    borderTopRightRadius: scale(15),
    flex: 1,
    marginTop: scale(15),
  },
  SubWrapper: {
    backgroundColor: colors.PaleBlue,
    padding: scale(8),
    borderRadius: scale(15),
    marginTop: scale(23),
    flex: 1,
  },
  ProgressStyle: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
export default function ModalContainer({children, ...restProps}) {
  return <View style={[Styles.GlobalContainer]}>{children}</View>;
}
ModalContainer.Header = function Header({children, ...restProps}) {
  return (
    <View style={[Styles.Header, restProps.style]}>
      <Return style={{marginRight: scale(22)}} />
      <ProgressBar
        progress={restProps.progress}
        width={scale(280)}
        color={colors.DarkBlue}
        height={8}
        borderColor={'white'}
        style={Styles.ProgressStyle}
      />
      {children}
    </View>
  );
};
ModalContainer.Wrapper = function Wrapper({children, ...restProps}) {
  return (
    <View style={[Styles.Wrapper, restProps.style]}>
      <TitleWrapper>{restProps.title}</TitleWrapper>
      <Description>{restProps.description} </Description>
      {children}
    </View>
  );
};
ModalContainer.Content = function Content({children, ...restProps}) {
  return <View style={[Styles.SubWrapper, restProps.style]}>{children}</View>;
};
