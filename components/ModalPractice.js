import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ModalPractice = () => {

    const [showModal ,setShowModal] = useState(false);
  return (
    <SafeAreaView style = {{flex:1}}>
    <View style = {styles.centeredView}>
        <Modal 
            animationType={'slide'}
            transparent={false}
            visible={showModal}
            onRequestClose={()=>alert('Modal has been closed.')}
        > 
            <View style = {styles.modalView}>
                <Text style={styles.modalText}>Modal is Open!</Text>
                <Button 
                    title="Click to Close Modal"
                    onPress={()=>setShowModal(!showModal)}
                />

            </View>

        </Modal>

        <Button
        title = 'Click to Open Modal'
        onPress={()=>setShowModal(!showModal)}
        />


    </View>
    </SafeAreaView>
  );
};

export default ModalPractice;



const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: { borderRadius: 20, padding: 10, elevation: 2 },
  buttonOpen: { backgroundColor: "#F194FF" },
  buttonClose: { backgroundColor: "#2196F3" },
  textStyle: { color: "white", fontWeight: "bold", textAlign: "center" },
  modalText: { marginBottom: 15, textAlign: "center" },
});
