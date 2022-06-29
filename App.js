import { View, Text } from 'react-native'
import React from 'react'
import User from './components/User'
import Logo from './components/Logo'


const App = () => {
  return (
    <View>
      <Logo/>
      <Text>App</Text>
      
      <User/>

    </View>
  )
}

export default App