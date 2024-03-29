import { StyleSheet, View, SafeAreaView, Image , TouchableOpacity,Text
} from "react-native";
import React from "react";



const TouchablePractice = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View >
       
       <TouchableOpacity >
      <View style = {styles.buttonFacebookStyle}>
       
        <Image
            source={require('../assets/facebook.png') }style = {styles.buttonImageIconStyle}
          />
        <View style = {styles.buttonIconSeparatorStyle}>

        </View>
        <Text style={styles.buttonTextStyle}>Login Using Facebook </Text> 
       
       </View>
        </TouchableOpacity>   


        <TouchableOpacity >
      <View style = {styles.buttonGPlusStyle}>
       
        <Image
            source={require('../assets/google-plus.png') }style = {styles.buttonImageIconStyle}
          />
        <View style = {styles.buttonIconSeparatorStyle}>

        </View>
        <Text style={styles.buttonTextStyle}>Login Using Google plus </Text> 
       
       </View>
        </TouchableOpacity>   

      </View>

      </SafeAreaView>

  );
};

export default TouchablePractice;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 30,
    padding: 30,
  },
  buttonGPlusStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dc4e41",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonFacebookStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#485a96",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
  buttonTextStyle: {
    color: "#fff",
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: "#fff",
    width: 1,
    height: 40,
  },
});
