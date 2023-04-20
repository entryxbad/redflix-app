import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import AuthProvider from '@/providers/auth/AuthProvider'

import Navigation from '@/navigation/Navigation'

const App = () => {
  return (
    <>
      <AuthProvider>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </AuthProvider>
      <StatusBar barStyle={'light-content'} />
    </>
  )
}

export default App
