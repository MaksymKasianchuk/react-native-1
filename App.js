import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground 
         style={styles.imageBg}
         source={require("./assets/photo_bg.png")}
      >
        <RegistrationScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  imageBg: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    resizeMode: "cover",
  },
});
