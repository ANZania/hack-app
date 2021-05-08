import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from "expo-app-loading";
import { StartScreen } from './src/screens/StartScreen';
import { SignIn } from './src/screens/SignIn';
import { bootstrap } from "./src/bootstrap";
import { LotList } from "./src/screens/LotList";
import { LotChoice } from "./src/screens/LotChoice";
import { CultureChoose } from "./src/screens/CultureChoose";
import { MapScreen } from "./src/screens/MapScreen";
import {GroundInfoScreen} from "./src/screens/GroundInfoScreen";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(true)

  const loadFonts = async () => {
    await bootstrap()
    setIsLoaded(false)
  }

  if (isLoaded) {
    return (
        <AppLoading
          startAsync={loadFonts}
          onFinish={() => setIsLoaded(true)}
          onError={err => console.log(err)}
        />
    )
  }

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={StartScreen} options={{headerShown: false}}/>
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
        <Stack.Screen name="LotList" component={LotList} options={{headerShown: false}}/>
        <Stack.Screen name="LotChoice" component={LotChoice} options={{headerShown: false}}/>
        <Stack.Screen name="Map" component={MapScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Ground" component={GroundInfoScreen} options={{headerShown: false}}/>
        <Stack.Screen name="CultureSelect" component={CultureChoose} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
