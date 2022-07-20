import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import User from './components/User'
import Logo from './components/Logo'
import LotsOfGreeting from './components/LotsOfGreeting'
import MyCustomTextWith from './components/MyCustomTextWith'
import Count from './components/Count'
import InputText from './components/InputText'
import UserNamePassword from './components/UserNamePassword'
import TextInputPractice1 from './components/TextInputPractice1'


const App = () => {
  return (
    <View style = {styles.container}>

      {/*<Logo/>*/}
      {/*<User/>*/}
    {/*<LotsOfGreeting/>*/}
    {/*<MyCustomTextWith/>*/}
    {/*<Count/>*/}
    {/*<InputText/>*/}
    {/*<UserNamePassword/>*/}
    <TextInputPractice1>
    </View>

  )
}

export default App


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'

  }
})