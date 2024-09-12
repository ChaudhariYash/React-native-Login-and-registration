import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import Icon from '@expo/vector-icons/Ionicons';
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const CreateAccountThree = () => {
  const [isChecked, setChecked] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  const navigation = useNavigation();
  const NavigatetoOtpone = () => {
    navigation.navigate("OtpOne");
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.LogoStyle}
        source={require("../../assets/images/Logo2.png")}
      />
      <Text style={styles.textStyle}>Create Account</Text>

      <Text style={styles.textStyl}>Name</Text>
      <TextInput
        style={styles.textinput}
        placeholder="e.g.yash chaudhari"
      />

      <Text style={styles.textStyl}>Email</Text>
      <TextInput style={styles.textinput} placeholder="e.g.email@example.com" />

      <Text style={styles.textStyl}>Password</Text>
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        secureTextEntry={!passwordVisible} // toggle password visibility
      />
      <TouchableOpacity onPress={togglePasswordVisibility} style={styles.icon}>
        <Icon name={passwordVisible ?'eye', : 'eye-off' } size={20} color="gray" />
      </TouchableOpacity>
    </View>

      <View  style={styles.checkbox}>
        <Checkbox value={isChecked} onValueChange={setChecked} />
        <Text>  I accept  </Text>
        <TouchableOpacity>
          <Text style={{color:'#1977F3'}}>Terms and Condition</Text>
        </TouchableOpacity>
        <Text>  and  </Text>
        <TouchableOpacity>
          <Text style={{color:'#1977F3'}}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={NavigatetoOtpone} style={styles.button}>
          <Text style={styles.buttontext}>Create New Account</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.lasttext}>or continue using</Text>

      <View style={styles.smallImage}>
        <Image
          style={styles.img}
          source={require("../../assets/images/FaceBook.png")}
        />
        <Image
          style={styles.img}
          source={require("../../assets/images/Google.png")}
        />
        <Image
          style={styles.img}
          source={require("../../assets/images/Apple.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingBottom: 20,
    paddingTop: 15,
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
    marginTop: 95,
    marginBottom: 15,
  },

  textStyl: {
    marginLeft: 10,
    fontSize: 16,
  },
  textinput: {
    borderWidth: 0.4,
    borderColor: "black",
    margin: 6,
    paddingTop: 5,
    paddingBottom: 7,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    borderTopRightRadius: 2,
    borderTopLeftRadius: 2,
  },

  button: {
  
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 25,
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
  lasttext: {
    textAlign: "center",
    marginTop: 15,
    marginBottom: 10,
  },
  img: {
    borderWidth: 0.03,
    borderColor: "black",
  },
  smallImage: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  checkbox:
  {
   
    color:'#1977F3',
     flexDirection:'row',
     margin:10,
     marginTop:20,
     marginLeft:35
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
    paddingVertical:1,
    paddingLeft: 10,
    
  },
  icon: {
    padding: 1,
  },
});

export default CreateAccountThree;
