import React, { useState } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigation } from '@react-navigation/native';

const HomeScreen = (props) => {
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.logOutStyle}>
          <Button
            style={styles.button}
            type="outline"
            title="Log Out"
            onPress={() => {
              auth.setIsLoggedIn(false);
            }}
          />
          <Button 
          style={styles.button} 
          title="Profile"
          onPress={() =>props.navigation.navigate("Profile")}
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
    flexDirection: 'row',
  },
  button: {
    marginLeft: 20,
    padding: 30,
  }
  
});

export default HomeScreen;