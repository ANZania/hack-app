import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from "expo-app-loading";
import { StartScreen } from './src/screens/StartScreen'

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  if (isLoaded) {
    return (
        <AppLoading
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
