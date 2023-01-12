import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import * as firebase from "firebase/app";

const profile = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const userId = firebase.auth().currentUser.uid;
        firebase.database().ref(`users/${userId}`).on('value', snapshot => {
            setUser(snapshot.val());
        });
    }, []);

    return (
        <View>
            <Text>Name: {user.name}</Text>
            <Text>Email: {user.email}</Text>
            {/* <Image source={{ uri: user.photoURL }} /> */}
        </View>
    );
}

export default profile;