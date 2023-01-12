import React, { useState,useEffect } from 'react';
import { View, TextInput, Button, Modal,StyleSheet ,Text} from 'react-native';
import { Input, Card } from "@rneui/themed";
import { getAuth } from 'firebase/auth';
// import * as firebase from 'firebase';
import {collection, doc, setDoc,addDoc } from "firebase/firestore"; 
import { getDatabase , ref, set} from "firebase/database";
import { db } from '../../firebase';

const database = getDatabase();



const AddPost = ({ visible, setVisible }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [postId, setPostId] = React.useState('');;
  const [email,setEmail] = useState()

  useEffect(() => {
    const auth= getAuth();
    setEmail(auth.currentUser.email)
    // firebase.database().ref(`users/${userId}`).on('value', snapshot => {
    //     setUser(snapshot.val());
    // });
   }, [email]);

  const auth=getAuth()

  const generateRandomString = (lenth) => {
  const char = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890';
  const random = Array.from(
      {length: lenth},
      () => char[Math.floor(Math.random() * char.length)]
  );
  const randomString = random.join("");
  return setPostId(randomString);
  }

  const handleAddPost = () => {
    // const userId = firebase.auth().currentUser.uid;
    // firebase.database().ref(`posts/${userId}`).push({
    //   title,
    //   content
    // });
    generateRandomString(10)
    setTitle('');
    setContent('');

    addDoc(collection(db, "posts"), {
     content:content,
     postID:postId,
     title:title,
     userEmail:email,

    }).then(()=>{
      alert("Post Created")
    }).catch((error)=>{
      alert(error.message);
    })
    
    //alert(postId)

    setVisible(false);
  };

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.viewStyle}>
        <Card>
            <Text styles={styles.titleStyles}>Add Post</Text>
            <Card.Divider />
            <Text>Title</Text>
            <TextInput
            style={styles.textStyle}
            placeholder="Add Title"
            value={title}
            onChangeText={(title)=>{setTitle(title)}}
            />
            <Card.Divider />
            <Text>Content</Text>
            <TextInput
            style={styles.textStyle}
            placeholder="Add Content"
            value={content}
            onChangeText={(content)=>{setContent(content)}}
            multiline={true}
            numberOfLines={4}
            />
            <Card.Divider />
            <View style={styles.buttonContainer}>
              <Button styles={styles.button} title="Add Post" onPress={handleAddPost} />
              <Text> </Text>
              <Button styles={styles.button} title="Cancel" onPress={() => setVisible(false)} />
            </View>
        </Card>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
  },
    container:{
     justifyContent:'center',
    }
    ,
   buttonContainer:{
    width:'20%',
    flexDirection: 'row',
  },
  button: {
    marginLeft: 20,
    padding: 30,
  },
  textStyle: {
    borderWidth:  1,
    borderColor:"#d4d4d4",
  },
  titleStyles:{
    fontSize: 30,
  }

  });

export default AddPost;