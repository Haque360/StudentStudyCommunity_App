import React, { useState } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { AuthContext } from "../providers/AuthProvider";

const HomeScreen = (props) => {
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.logOutStyle}>
          <Button
            type="outline"
            title="log out"
            onPress={() => {
              auth.setIsLoggedIn(false);
            }}
          />
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
  logOutStyle:{
    width:'20%',
  },
  
});

export default HomeScreen;