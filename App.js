import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, ImageBackground,  Dimensions } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Tin": require("./assets/fonts/Roboto-Thin.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  // const [dimensions, setDimentions] = useState(false);

  // useEffect(() => {
  //   const onChange = () => {
  //     setDimentions((prev)=> !prev);
  //   }
  //   Dimensions.addEventListener("change", onChange);
  //   return (() => {
  //     Dimensions.removeEventListener("change", onChange);
  //   });
  // }, []);

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
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
    resizeMode: "cover",
  },
});
