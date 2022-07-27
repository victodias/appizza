import Loading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans'
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display'
import { ThemeProvider } from 'styled-components/native'
import theme from './src/theme'
import SignIn from '@screens/SignIn'

export default function App() {
  const [fontsIsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  })

  if (!fontsIsLoaded) return <Loading />

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <SignIn />
    </ThemeProvider>
  )
}
