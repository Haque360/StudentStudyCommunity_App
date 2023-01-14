import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet, Text, TouchableOpacity } from "react-native";
import ForumList from "../components/ForumList";
import AddPost from "../components/AddPost";
import LogOut from "../components/LogOut";

const HomeScreen = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (

    <View style={styles.viewStyle}>

      <View style={styles.logoHeaderStyle}>
        <Text style={styles.logoStyle2}>Student Study Community App</Text>
      </View>

      <View style={styles.logOutStyle}>

        <Text> </Text>
        <LogOut />
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
        />
      </View>

      <View>


        <ForumList />

      </View>
    </View>

  );
};

const styles = StyleSheet.create({

  forumViewStyle:{
    flex:1,
  },

  viewStyle: {
    backgroundColor: "#0081C9",
    flex:1
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