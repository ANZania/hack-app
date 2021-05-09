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
import {MapChoice} from "./src/screens/MapChoice";
import {CultureInfoScreen} from "./src/screens/CultureInfoScreen";
import {ClimateScreen} from "./src/screens/ClimateScreen";
import {YieldScreen} from "./src/screens/YieldScreen";
import {DeadLinesScreen} from "./src/screens/DeadLinesScreen";
import {HealthGroundScreen} from "./src/screens/HealthGroundScreen";
import {LastInfoScreen} from "./src/screens/LastInfoScreen";
import {DetailScreen} from "./src/screens/DetailScreen";
import {SignUp} from "./src/screens/SignUpScreen";
import {Provider} from "react-redux";
import {store} from "./src/store";

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
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={StartScreen} options={{headerShown: false}}/>
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
        <Stack.Screen name="LotList" component={LotList} options={{headerShown: false}}/>
        <Stack.Screen name="LotChoice" component={LotChoice} options={{headerShown: false}}/>
        <Stack.Screen name="MapChoice" component={MapChoice} options={{headerShown: false}}/>
        <Stack.Screen name="Map" component={MapScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Ground" component={GroundInfoScreen} options={{headerShown: false}}/>
        <Stack.Screen name="CultureSelect" component={CultureChoose} options={{headerShown: false}}/>
        <Stack.Screen name="CultureInfo" component={CultureInfoScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Climate" component={ClimateScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Yield" component={YieldScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Deadlines" component={DeadLinesScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Health" component={HealthGroundScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Last" component={LastInfoScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Detail" component={DetailScreen} options={{headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
