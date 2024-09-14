import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./screens/splash";
import Login from "./screens/login";
import CreateAccount from "./screens/CreateAccount";
import CreateAccountThree from "./screens/CreateAccount4";
import OtpOne from "./screens/Otp1";
import OtpTwo from "./screens/Otp2";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} /> 
        <Stack.Screen name="xyz" component={Login} /> 
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="fifthPage" component={CreateAccountThree} />
        <Stack.Screen name="OtpOne" component={OtpOne} />
        <Stack.Screen name="OtpTwo" component={OtpTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
  

  //In component we write function name 
  //in the name we take  anything name we want to give a screen  