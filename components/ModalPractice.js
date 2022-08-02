import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View , SafeAreaView} from "react-native";

const ModalPractice = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <SafeAreaView style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setShowModal(!showModal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>คุณลืมปิดไฟในห้องT_T</Text>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setShowModal(!showModal)}>
              <Text style={styles.textStyle}>กรุณากดปุ่มเพื่อปิดไฟ</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      
      <Text style={styles.modalText}>ไฟในห้องปิดอยู่</Text>
      <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={() => setShowModal(true)}
      >
        <Text style={styles.textStyle}>กรุณากดปุ่มเพื่อเปิดไฟอีกครั้ง</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 1,
    textAlign: "center",
    color: "black"
  }
});

export default ModalPractice;import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View , SafeAreaView} from "react-native";

const ModalPractice = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <SafeAreaView style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setShowModal(!showModal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>คุณลืมปิดไฟในห้องT_T</Text>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setShowModal(!showModal)}>
              <Text style={styles.textStyle}>กรุณากดปุ่มเพื่อปิดไฟ</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      
      <Text style={styles.modalText}>ไฟในห้องปิดอยู่</Text>
      <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={() => setShowModal(true)}
      >
        <Text style={styles.textStyle}>กรุณากดปุ่มเพื่อเปิดไฟอีกครั้ง</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 1,
    textAlign: "center",
    color: "black"
  }
});

export default ModalPractice;import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View , SafeAreaView} from "react-native";

const ModalPractice = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <SafeAreaView style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setShowModal(!showModal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>คุณลืมปิดไฟในห้องT_T</Text>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setShowModal(!showModal)}>
              <Text style={styles.textStyle}>กรุณากดปุ่มเพื่อปิดไฟ</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      
      <Text style={styles.modalText}>ไฟในห้องปิดอยู่</Text>
      <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={() => setShowModal(true)}
      >
        <Text style={styles.textStyle}>กรุณากดปุ่มเพื่อเปิดไฟอีกครั้ง</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 1,
    textAlign: "center",
    color: "black"
  }
});

export default ModalPractice;
