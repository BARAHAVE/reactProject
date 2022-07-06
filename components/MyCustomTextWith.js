import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const Name = (props) => {
    return (
      <View style={{ alignItems: "center" }}>
        <Text>
         You First name is  {props.firstname} and Last name is  {props.secondname}
        </Text>
      </View>
    );
  };

  
//coding function MyCustomTextWith

const MyCustomTextWith  = () => {
    return (
    <SafeAreaView style={{flex: 1}}>
    <View
    style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }}>
        
        {/*Use of our custom component MyCustomTextWith*/}
        <Name firstname = "Baramee"  secondname= "Boonsawat" />
        <Name   firstname = "John"   secondname= "Carter"
        />

        </View>

        </SafeAreaView>
        );
    };
    export default MyCustomTextWith;
