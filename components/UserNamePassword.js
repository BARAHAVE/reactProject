import { View, Text ,StyleSheet, TextInput , Button} from 'react-native'
import React,{useState} from 'react'

const UserNamePassword = () => {

    const [Email,setEmail] = useState('');
    const [Pass,setPass] = useState('');

  return (
    <View style={{flex:1,marginTop:20,alignItems:'center'}}>

      <TextInput
        value={Email}
        onChangeText = {(Email) => {setEmail(Email)}}
        style = {styles.textinput}
        placeholder='Email'
      />

    <TextInput
        value={Pass}
        onChangeText = {(Pass) => {setPass(Pass)}}
        style = {styles.textinput}
        placeholder='Password'
      />
    
     <Button 
        title='Submit'
        onPress= {(checkTextInput)}
      />
    </View>
  )
}


export default UserNamePassword

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





const checkTextInput= (Name,Pass) => {
  //Check for the Name TextInput
  if (!textInputName.trim(Name)) {
    alert('Please Enter Name');
    return;
  }
  if (!textInputName.trim(Pass)) {
    alert('Please Enter Pass');
    return;
  }
};
