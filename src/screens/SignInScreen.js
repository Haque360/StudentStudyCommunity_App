import React, { useState } from "react";
import { View, StyleSheet,Text } from "react-native";
import { Input, Button, Card } from "@rneui/themed";
import { AuthContext } from "../providers/AuthProvider";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignInScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (auth) => {
    if (email && password) {
      const fireAuth = getAuth();
      signInWithEmailAndPassword(fireAuth, email, password)
        .then((userCreds) => {
          auth.setIsLoggedIn(true);
          auth.setCurrentUser(userCreds.user);
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });
    } else {
      alert("FIELDS ARE EMPTY!");
    }
  };
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.viewStyle}>
          <View style={styles.logoHeaderStyle}>
            <Text style={styles.logoStyle2}>Student Study Community App</Text>
          </View>
          <Card style={styles.cardStyle}>
            <Card.Title>Welcome Back!!</Card.Title>
            <Card.Divider />
            <Input
              placeholder="Email Address"
              onChangeText={(currentInput) => {
                setEmail(currentInput);
              }}
            />
            <Input
              placeholder="Password"
              secureTextEntry
              onChangeText={(currentInput) => {
                setPassword(currentInput);
              }}
            />
            <Button
              title="Sign In!"
              type="solid"
              onPress={() => {
                handleSignIn(auth);
              }}
            />
            <Button
              title="Dont have an Account? Sign Up"
              type="clear"
              onPress={() => {
                props.navigation.navigate("SignUp");
              }}
            />
          </Card>
        </View>
      )}
    </AuthContext.Consumer>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "blue",
  },
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#0081C9",

  },
  cardStyle: {
    borderRadius: '40%',
  },
  logoHeaderStyle:{
    alignItems: 'flex-end',
    alignItems: 'center'
  },
  logoStyle2:{
    fontSize:30,
  }
});

export default SignInScreen;