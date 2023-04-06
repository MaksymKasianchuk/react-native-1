import React, { useCallback } from "react";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import { useRoute } from './hooks';

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Tin": require("./assets/fonts/Roboto-Thin.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  const routing = useRoute({});

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>
        { routing }
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

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