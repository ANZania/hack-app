import * as Font from 'expo-font'

export async function bootstrap () {
    try {
        await Font.loadAsync({
            'Italic-Regular': require('../assets/fonts/Inter-Regular.ttf'),
            'Italic-Medium': require('../assets/fonts/Inter-Medium.ttf'),
            'Italic-Light': require('../assets/fonts/Inter-Light.ttf'),
            'Italic-Bold': require('../assets/fonts/Inter-Bold.ttf'),
            'Italic-ExtraBold': require('../assets/fonts/Inter-ExtraBold.ttf'),
        })
    } catch (e) {
        console.log(e)
    }

}