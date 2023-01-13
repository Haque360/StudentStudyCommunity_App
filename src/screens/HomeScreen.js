import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet, Text, TouchableOpacity, RefreshControl, ScrollView } from "react-native";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigation } from '@react-navigation/native';
import ForumList from "../components/ForumList";
import AddPost from "../components/AddPost";
import { Card } from "@rneui/base";
import { Touchable } from "react-native";

const HomeScreen = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [reRender, setReRender] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const handleCallback = () => {
    setReRender(!reRender);
  }
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  // const handleOnPress = () => {
  //   setModalVisible(true);
  //   setIsUpdated(true);
  // }


  return (
    <AuthContext.Consumer>
      {(auth) => (

        <View style={styles.viewStyle}>
          <View style={styles.logoHeaderStyle}>
            <Text style={styles.logoStyle2}>Student Study Community App</Text>
          </View>

          <View style={styles.logOutStyle}>

            <Text> </Text>
            <Button
              style={styles.button}
              type="outline"
              title="Log Out"
              onPress={() => {
                auth.setIsLoggedIn(false);
              }}
            />
            <Text>                                                                                                             </Text>

            <Button
              style={styles.button}
              title="Profile"
              onPress={() => props.navigation.navigate("Profile")}
            />
            <Text> </Text>
            <TouchableOpacity>
              <Button
                style={styles.button}
                title="Add Post"
                onPress={() => {
                  setModalVisible(true);
                }}
              /></TouchableOpacity>

            <AddPost
              visible={modalVisible}
              setVisible={setModalVisible}
              callback={handleCallback}
            />
          </View>

          <View>
            
           
            <ForumList reRender={reRender} /> 
           
          </View>
        </View> 
      )}
    </AuthContext.Consumer>

  );
};

const styles = StyleSheet.create({

  viewStyle: {
    backgroundColor: "#0081C9",
  },
  textStyle: {
    fontSize: 30,
    color: "blue",
  },
  logOutStyle: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignItems: 'center',
    backgroundColor: "skyblue",
    height: '5%',
  },
  button: {
    marginLeft: 20,
    padding: 30,
  },
  buttonSetup: {
    flexDirection: 'column'
  },
  logoHeaderStyle: {
    alignItems: 'flex-end',
    alignItems: 'center',
    backgroundColor: "skyblue",
  },
  logoStyle2: {

    fontSize: 30,
    paddingTop: 20
  }

});

export default HomeScreen;