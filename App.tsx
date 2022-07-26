import { Text, View } from 'react-native'
import Loading from 'expo-app-loading'
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans'
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display'

export default function App() {
  const [fontsIsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  })

  if (fontsIsLoaded) return <Loading />

  return (
    <View>
      <Text>App izza</Text>
    </View>
  )
}
