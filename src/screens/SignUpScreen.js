import { Input, Button, Card } from "@rneui/themed";
import React, { useState } from "react";
import { View, StyleSheet,Text } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const SignUpScreen = (props) => {
  const [name, setName] = useState("");
  const [studentID, setStudentID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    const auth = getAuth();
    if (name && email && studentID && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCreds) => {
          //This is for RealTime Database Implementation on Firebase
          const db = getDatabase();
          set(ref(db, "users/" + userCreds.user.uid), {
            username: name,
            email: userCreds.user.email,
            studentID: studentID,
          });
          props.navigation.navigate("SignIn");
        })
        .catch((error) => {
          console.log("Firebase Error", error);
        });
    } 
    else {
      alert("FIELDS ARE EMPTY!");
    }
  };

  return (
    <View style={styles.viewStyle}>
      <View style={styles.logoHeaderStyle}>
            <Text style={styles.logoStyle2}>Student Study Community App</Text>
          </View>
      <Card containerStyle={{ backgroundColor: 'white', }}>
        <Card.Title>Welcome To The Community</Card.Title>
        <Card.Divider />
        <Input
          placeholder="Name"
          onChangeText={(currentInput) => {
            setName(currentInput);
          }}
        />
        <Input
          placeholder="Student ID"
          onChangeText={(currentInput) => {
            setStudentID(currentInput);
          }}
        />
        <Input
          placeholder="Email"
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
          title="Sign Up!"
          type="solid"
          onPress={() => {
            handleSignUp();
          }}
        />
        <Button
          title="Already Have an Account?"
          type="clear"
          onPress={() => {
            props.navigation.navigate("SignIn");
          }}
        />
      </Card>
    </View>
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
  logoHeaderStyle:{
    alignItems: 'flex-end',
    alignItems: 'center',
  },
  logoStyle2:{
    fontSize:30,
  }
});

export default SignUpScreen;