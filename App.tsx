import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Navigation from '@/navigation/Navigation'

const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
      <StatusBar barStyle={'light-content'} />
    </>
  )
}

export default App
