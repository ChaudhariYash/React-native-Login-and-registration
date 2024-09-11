import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import Icon from '@expo/vector-icons/Ionicons';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";

const CreateAccount = () => {
  const [showModal, setShowModal] = useState(false);
  const [secondModal, setSecondModal] = useState(false);
     
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
 

  const navigation = useNavigation();
  const NavigatetocreateAccount = () => {
    navigation.navigate("fifthPage");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.LogoStyle}
        source={require("../../assets/images/Logo2.png")}
      />

      <Image
        style={styles.imageStyle}
        source={require("../../assets/images/img3.png")}
      />
      <Text style={styles.textStyle}>Enter your password</Text>
      <Text style={styles.textStyl}>Password</Text>
       
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        secureTextEntry={!passwordVisible} // toggle password visibility
      />
      <TouchableOpacity onPress={togglePasswordVisibility} style={styles.icon}>
        <Icon name={passwordVisible ?  'eye' :'eye-off'} size={20} color="grey" />
      </TouchableOpacity>
    </View>

<TouchableOpacity>
        <Text style={styles.forgot} onPress={() => setShowModal(true)}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <View> 
        <Modal transparent={true} visible={showModal}>
          <View style={styles.modal}>
            <View style={styles.modalView}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.modaltextStyle}>Forgot your password?</Text>
                <TouchableOpacity onPress={() => setShowModal(false)}>
                  <Text style={styles.modaltext}>Done</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.modaltextStyl}>Email</Text>
              <TextInput
                style={styles.textinput}
                placeholder="e.g.email@example.com"
              />
             
              <View>
                <TouchableOpacity style={styles.modalbutton}>
                  <Text style={styles.buttontext}>send reset link</Text>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity>
                  <Text
                    style={styles.modalforgot}
                    onPress={() => setSecondModal(true)}
                  >
                    Use mobile instead
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <View>
        <Modal transparent={true} visible={secondModal}>
          <View style={styles.modal}>
            <View style={styles.modalView}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.modaltextStyle}>Forgot your password?</Text>
                <TouchableOpacity onPress={() => setSecondModal(false)}>
                  <Text style={styles.modaltext}>Done</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.modaltextStyl}>Mobile number</Text>
              <TextInput style={styles.textinput} placeholder="7X-XXXXXXXXX" />
              <View>
                <TouchableOpacity style={styles.modalbutton}>
                  <Text style={styles.buttontext}>send reset link</Text>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity>
                  <Text style={styles.modalforgot}>Use email instead </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={NavigatetocreateAccount}
        >
          <Text style={styles.buttontext}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F4FF",
    flex: 0.5,
    paddingBottom: 20,
    paddingTop: 15,
   
  },

  imageStyle: {
    marginTop: 10,
    marginLeft: 120,
    marginBottom: 65,
  },
  LogoStyle: {
    height: 25,
    width: 85,
    zIndex: 100,   
    marginTop: 20,
    marginLeft: 165,
    marginBottom: 25,
  },
  textStyle: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 25,
  },
  textStyl: {
    marginLeft: 10,
    marginTop: 25,
    fontSize: 16,
  },
  textinput: {
    borderWidth: 0.4,
    borderColor: "black",
    margin: 12,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    borderTopRightRadius: 2,
    borderTopLeftRadius: 2,
  },
  forgot: {
    fontSize: 15,
    color: "#1D62CA",
    fontWeight: "600",
    marginLeft: 280,
  },
  button: {
   
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 65,
    backgroundColor: "#5732BF",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  buttontext: {
    fontSize: 15,
    color: "white",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 5,
    marginTop: 5,
  },
  modal: {
    flex: 1,
    justifyContent: "flex-end",
     backgroundColor:'grey',
  
    
  },
  modalView: {
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  modaltext: {
    fontSize: 20,
    color: "#1D62CA",
    marginLeft: 135,
    marginTop: 15,
    fontWeight: "bold",
  },
  modalforgot: {
    fontSize: 14.5,
    color: "#1D62CA",
    fontWeight: "600",
    textAlign: "center",
    marginTop: 17,
    marginBottom: 25,
  },
  modalbutton: {
   
    paddingTop: 7,
    paddingBottom: 7,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    backgroundColor: "#5732BF",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  modaltextStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 15,
  },
  modaltextStyl: {
    marginLeft: 10,
    marginTop: 15,
    fontSize: 15,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth:0.4,
    borderTopWidth:0.4,
    borderColor: 'black',
    paddingVertical: 5,
    marginTop:7,
    borderLeftWidth:0.4,
    borderRightWidth:0.4,
    marginLeft:5,
    marginRight:5,
    borderRadius:2
    
  },
  input: {
    flex: 1,
    paddingVertical: 5,
    paddingLeft: 10,
    
  },
  icon: {
    padding: 5,
  },
});

export default CreateAccount;
