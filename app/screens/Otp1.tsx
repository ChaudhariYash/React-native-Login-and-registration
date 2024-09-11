import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const OtpOne = () => {
  const navigation = useNavigation();
  const NavigateOtpTwo = () => {
    navigation.navigate("OtpTwo");
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.LogoStyle}
        source={require("../../assets/images/Logo2.png")}
      />
      <Text style={styles.textStyle}>An SMS sent to your mobile number</Text>
      <Text style={styles.Text}>+96279 XXX-XXX</Text>

      <Text style={styles.textStyl}>Enter six-Digit Code</Text>
      <TextInput style={styles.textinput} placeholder="xxx-xxx" />
      <View style={styles.row}>
        <Text style={styles.textStyl}>Resend code </Text>
        <Text style={styles.timer}>00.32 </Text>
      </View>

    

      <View>
        <TouchableOpacity onPress={NavigateOtpTwo} style={styles.button}>
          <Text style={styles.buttontext}>Done</Text>
        </TouchableOpacity>
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
    fontSize: 21,
    fontWeight: "bold",
    marginLeft: 10,
    textAlign: "center",
  },
  Text: {
    fontSize: 21,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 18,
    textAlign: "center",
  },

  textStyl: {
    marginLeft: 10,
    fontSize: 16,
    textAlign: "center",
  },
  timer: {
    fontSize: 15,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    marginLeft: 125,
    marginTop: 20,
  },
  textinput: {
    borderBottomWidth: 2,
    borderColor: "#5732BF",
    fontSize: 70,
    textAlign: "center",
    paddingBottom: 7,
    borderBottomLeftRadius: 110,
    borderBottomRightRadius: 110,
  },

  button: {
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 285,
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
});

export default OtpOne;
