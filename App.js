import React, { useState, useEffect, useCallback } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,  Dimensions } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { ScrollView } from "react-native-web";

export default function App() {
  const [isReady, setIsReady] = useState(false);
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

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
            "Roboto-Tin": require("./assets/fonts/Roboto-Thin.ttf"),
            "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
            "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      {/* <ScrollView scrollEnabled={dimensions}> */}
        <ImageBackground 
          style={styles.imageBg}
          source={require("./assets/photo_bg.png")}
        >
          <RegistrationScreen />
        </ImageBackground>
      {/* </ScrollView> */}
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
