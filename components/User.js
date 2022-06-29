import { View, Text } from 'react-native'
import React from 'react'

const User = () => {
    const users =[
        {id:1,name:"John"},
        {id:2,name:"John"},
    ]
  return (
    <View>
      <Text></Text>
      {
        users.map((user,index)=>{
            return <Text style={{color:"green",fontWeight:'bold'}}>key={user.id} {index+1}. {user.name}</Text>
        })
      }
    </View>
  )
}

export default User