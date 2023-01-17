import 'react-native-gesture-handler';
import { StatusBar, StyleSheet, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./navigation/AppNavigator";
import colors from "./themes/colors";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
const AppContainer = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar backgroundColor={colors.DarkBlue} barStyle="default" />
      <AppNavigator />
    </SafeAreaProvider>
  );
};
export default AppContainer;
