import React, { useState, useEffect } from 'react';
import { View, Text,Button, StyleSheet } from 'react-native';
import { Input, Card } from "@rneui/themed";
import LogOut from '../components/LogOut';
import { TextInput } from 'react-native-gesture-handler';
import { getAuth, updateProfile, updateEmail } from "firebase/auth";
import { CardDivider } from '@rneui/base/dist/Card/Card.Divider';

const Profile = (props) => {
  const [user, setUser] = useState({});
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  // const [bio, setBio] = useState()


  useEffect(() => {
    const auth = getAuth();
    setName(auth.currentUser.displayName)
    setEmail(auth.currentUser.email)
    // firebase.database().ref(`users/${userId}`).on('value', snapshot => {
    //     setUser(snapshot.val());
    // });
  }, [email]);

  const _saveDetails = (name, email) => {
    //alert(email)
    const auth = getAuth();
    // alert(auth.currentUser.email)

    updateProfile(auth.currentUser, {
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
        <View style={styles.viewStyle}>
          <View style={styles.logoHeaderStyle}>
            <Text style={styles.logoStyle2}>Student Study Community App</Text>
          </View>
          {/* <Text>Name: {user.name}</Text>
                <Text>Email: {user.email}</Text> */}

          <View style={styles.logOutStyle}>
            <Text> </Text>
            <LogOut/>
            <Text>                                                                                                                                           </Text>
            <Button
              style={styles.button}
              title="Home"
              onPress={() => props.navigation.navigate("Home")}
            />
          </View>
          <Card>
            <Text style={styles.textStyle}>Name:</Text>
            <TextInput value={name} onChangeText={setName} style={styles.textStyle2} />

            <Text style={styles.textStyle}>Email:</Text>
            <TextInput value={email} onChangeText={setEmail} style={styles.textStyle2} />

            {/* <Text style={styles.textStyle}>Bio</Text> */}
            {/* <TextInput
              onChangeText={setBio}
              style={styles.textStyle2}
              multiline={true}
              numberOfLines={4}
              // onChangeText={(text) => this.setState({text})}
              value={bio}
            /> */}
            <CardDivider />
            <View>
              <Button title='Edit' onPress={() => _saveDetails(name, email)} />
            </View>
          </Card>

        </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#0081C9",
    height: '100%'
  },
  textStyle: {
    fontSize: 20,
  },
  textStyle2: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: "#d4d4d4",
  },
  logOutStyle: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignItems: 'center',
    backgroundColor: "skyblue",
    height: '5%'
  },
  logoHeaderStyle:{
    alignItems: 'flex-end',
    alignItems: 'center',
    backgroundColor: "skyblue",
  },
  logoStyle2:{
    fontSize:30,
    paddingTop:20
  }

});

export default Profile;