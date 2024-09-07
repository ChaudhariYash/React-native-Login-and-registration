import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

const Splash = ({}) => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 2000);
  }, []);

  return (
    <View style={styles.FirstPage}>
      <Image
        style={styles.imageStyle}
        source={require("../../assets/images/Logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  FirstPage: {
    flex: 1,
    backgroundColor: "#5732BF",
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    width: 110, // adjust the width and height to your needs
    height: 110,
    resizeMode: "contain",
  },
});

export default Splash;
