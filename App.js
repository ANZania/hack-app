import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Provider} from "react-redux";
import {store} from "./src/store";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from "expo-app-loading";

import { StartScreen } from './src/screens/StartScreen'

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  if (!isLoaded) {
    return (
        <AppLoading
            startAsync={}
            onFinish={() => setIsLoaded(true)}
            onError={err => console.log(err)}
        />
    )
  }

  const Stack = createStackNavigator();

  return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Start" component={StartScreen} options={{headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
}
