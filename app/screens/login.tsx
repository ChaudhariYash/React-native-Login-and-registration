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
// This is testing for git push
const Login = () => {
  const navigation = useNavigation();
  const NavigatetocreateAccount = () => {
    navigation.navigate("CreateAccount");
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.LogoStyle}
        source={require("../../assets/images/Logo2.png")}
      />

      <Image
        style={styles.imageStyle}
        source={require("../../assets/images/img2.png")}
      />
      <Text style={styles.textStyle}>Enter your </Text>
      <Text style={styles.textStyl}>Mobile Number </Text>
      <Text style={{ marginLeft: 10 }}>Mobile Number </Text>

      <TextInput style={styles.textinput} placeholder="9X-XXXXXXXX" />
      <View>
        <TouchableOpacity
          onPress={NavigatetocreateAccount}
          style={styles.button}
        >
          <Text style={styles.buttontext}>Continue</Text>
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
    backgroundColor: "#F7F4FF",
    flex: 0.5,
  },

  imageStyle: {
    //  resizeMode:'cover',
    height: 50,
    width: 100,
    marginTop: 35,
    marginLeft: 100,
    padding: 100,
    paddingLeft: 100,
    paddingRight: 100,
    marginBottom: 37,
  },
  LogoStyle: {
    //resizeMode:'cover',
    height: 25,
    width: 85,
    zIndex: 100,
    marginTop: 20,
    marginLeft: 165,
    marginBottom: 25,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 3,
  },
  textStyl: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 20,
    marginLeft: 10,
  },

  textinput: {
    borderWidth: 0.2,
    borderColor: "black",
    margin: 12,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    borderTopRightRadius: 2,
    borderTopLeftRadius: 2,
  },
  button: {
    // height:100,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
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
  smallImage: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  img: {
    borderWidth: 0.03,
    borderColor: "black",
  },
});

export default Login;
