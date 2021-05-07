import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from "expo-app-loading";
import { StartScreen } from './src/screens/StartScreen';
import { SignIn } from './src/screens/SignIn';
import {bootstrap} from "./src/bootstrap";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
