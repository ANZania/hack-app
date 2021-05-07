import * as Font from 'expo-font'

export async function bootstrap () {
    try {
        await Font.loadAsync({
            'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
            'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
            'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
            'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
            'Inter-SemiBold': require('../assets/fonts/Inter-Bold.ttf'),
            'Inter-ExtraBold': require('../assets/fonts/Inter-ExtraBold.ttf'),
        })
    } catch (e) {
        console.log(e)
    }

}
