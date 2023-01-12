import React, { useState, useEffect } from 'react';
import { View, Text, Image,Button,StyleSheet} from 'react-native';
import { Input,  Card } from "@rneui/themed";
import { AuthContext } from "../providers/AuthProvider";
import * as firebase from "firebase/app";
import { TextInput } from 'react-native-gesture-handler';

const Profile = (props) => {
    // const [user, setUser] = useState({});

    // useEffect(() => {
    //     const userId = firebase.auth().currentUser.uid;
    //     firebase.database().ref(`users/${userId}`).on('value', snapshot => {
    //         setUser(snapshot.val());
    //     });
    // }, []);

    return (
        <AuthContext.Consumer>
          {(auth) => (
            <View>
                {/* <Text>Name: {user.name}</Text>
                <Text>Email: {user.email}</Text> */}
                
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
                    title="Home"
                    onPress={() =>props.navigation.navigate("Home")}
                    />
                </View>
                <Card>
                    {/* <Image source={{ uri: user.photoURL }} /> */}
                    <Text style={styles.textStyle}>Name:</Text>
                    <Text style={styles.textStyle2}></Text>

                    <Text style={styles.textStyle}>Email:</Text>
                    <Text style={styles.textStyle2}></Text>

                    <Text style={styles.textStyle}>Bio</Text>
                    <TextInput
                    style={styles.textStyle2}
                    multiline={true}
                    numberOfLines={4}
                    // onChangeText={(text) => this.setState({text})}
                    // value={this.state.text}
                    />
                </Card>
            
            </View>
        )}
        </AuthContext.Consumer>
    );
}

const styles = StyleSheet.create({
    textStyle: {
      fontSize: 20,
    },
    textStyle2: {
        fontSize: 20,
        borderWidth:  1,
        borderColor:"#d4d4d4",
      },
    logOutStyle:{
      width:'20%',
      flexDirection: 'row',
    },
    button: {
      marginLeft: 20,
      padding: 30,
      width:'20%',
    }
    
  });

export default Profile;

