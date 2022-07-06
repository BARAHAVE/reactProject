import { View, Text ,StyleSheet, TextInput} from 'react-native'
import React,{useState} from 'react'

const InputText = () => {

    const [userName,setUserName] = useState('');
    
  return (
    <View style={{flex:1,marginTop:20,alignItems:'center'}}>
      <Text>Insert any Text in below input</Text>
      <TextInput
        value={userName}
        onChangeText = {(userName) => {setUserName(userName)}}
        style = {styles.textinput}
        placeholder='Please input username'
      
      />
      <text style = {{color : '#45ff',fontSize:24}}>{userName}</text>

    </View>
  )
}

export default InputText

const styles = StyleSheet.create({

    textinput: {
        width:250,
        height:45,
        padding:10,
        marginTop:20,
        marginBottom:10,
        backgroundColor:'#8e88'
    }
})