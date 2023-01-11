import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import * as firebase from "firebase/app";

import { AuthProvider, AuthContext } from "./src/providers/AuthProvider";

const firebaseConfig = {
  apiKey: "AIzaSyC53Je42jPPPYTAPgRxB0oXiPaXj0ZqcEI",
  authDomain: "studentstudycommunityapp-6b8cc.firebaseapp.com",
  projectId: "studentstudycommunityapp-6b8cc",
  storageBucket: "studentstudycommunityapp-6b8cc.appspot.com",
  messagingSenderId: "940829156984",
  appId: "1:940829156984:web:e575d69075d2a601202f8d",
  measurementId: "G-FELFSB4XEV"
};
if (!firebase.length) {
  firebase.initializeApp(firebaseConfig);
}

const HomeStack = createStackNavigator();
const AuthStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName="SignUp">
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};

function App() {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {(auth) => (
          <NavigationContainer>{auth.isLoggedIn ? <HomeStackScreen /> : <AuthStackScreen />}</NavigationContainer>
        )}
      </AuthContext.Consumer>
    </AuthProvider>
  );
}

export default App;