import React, { useState, useEffect } from 'react';
import { View, Text, Image,Button,StyleSheet} from 'react-native';
import { Input,  Card } from "@rneui/themed";
import { AuthContext } from "../providers/AuthProvider";
import * as firebase from "firebase/app";
import { TextInput } from 'react-native-gesture-handler';
import { update } from 'firebase/database';
import { getAuth, updateProfile, updateEmail  } from "firebase/auth";

const auth = getAuth();


const Profile = (props) => {
    const [user, setUser] = useState({});
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [bio,setBio] = useState()

    useEffect(() => {
        const auth= getAuth();
        setName(auth.currentUser.displayName)
        setEmail(auth.currentUser.email)
        // firebase.database().ref(`users/${userId}`).on('value', snapshot => {
        //     setUser(snapshot.val());
        // });
    }, [email]);

    const _saveDetails=(name,email,bio)=>{
      //alert(email)
      const auth=getAuth();
      // alert(auth.currentUser.email)

      updateProfile(auth.currentUser,{
        displayName: name,
        // bio:bio
      }).then(() => {
        // Update successful
        updateEmail(auth.currentUser, email).then(() => {
          // Email updated!
          alert("update successful")
          // ...
        }).catch((error) => {
          // An error occurred
          alert(error.message)
          // ...
        });
        //alert("update successful")
        // ...
      }).catch((error) => {
        // An error occurred
        alert(error.message)
        // ...
      });  
    }

    return (
        <AuthContext.Consumer>
          {(auth) => (
            <View>
                {/* <Text>Name: {user.name}</Text>
                <Text>Email: {user.email}</Text> */}
                
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
                    <Text> </Text>
                    <Button 
                    style={styles.button} 
                    title="Home"
                    onPress={() =>props.navigation.navigate("Home")}
                    />
                </View>
                <Card>
                     <View style={styles.imgContainer}> 
                        <Image
                        source={require('../../assets/prof.jpg')}
                        style={styles.image}
                        />
                        <Button title='Edit' onPress={()=>_saveDetails(name,email,bio)}/>
                    </View>
                   
                    <Text style={styles.textStyle}>Name:</Text>
                    <TextInput value={name} onChangeText={setName}style={styles.textStyle2}/>

                    <Text style={styles.textStyle}>Email:</Text>
                    <TextInput value={email} onChangeText={setEmail} style={styles.textStyle2}/>

                    <Text style={styles.textStyle}>Bio</Text>
                    <TextInput
                    onChangeText={setBio}
                    style={styles.textStyle2}
                    multiline={true}
                    numberOfLines={4}
                    // onChangeText={(text) => this.setState({text})}
                    value={bio}
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
    },
    image:{
        width: 200,
        height: 200,
        borderRadius:200/2,
        borderWidth:  1,
        borderColor:"#d4d4d4",
    },
    imgContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    }

  });

export default Profile;

