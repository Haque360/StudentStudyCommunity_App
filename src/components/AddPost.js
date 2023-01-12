import React, { useState,useEffect } from 'react';
import { View, TextInput, Button, Modal,StyleSheet ,Text} from 'react-native';
import { Input, Card } from "@rneui/themed";
import { getAuth } from 'firebase/auth';
// import * as firebase from 'firebase';
import { doc, setDoc } from "firebase/firestore"; 
import { getDatabase , ref, set} from "firebase/database";

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

  function writeUserData(title,content,postID, userEmail) {
    const db = getDatabase();
    set(ref(db, 'posts'), {
      title: setTitle(''),
      content: setContent(''),
      postID:setPostId(''),
      email: setEmail(''),
    });
  }

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
    setVisible(false);
    writeUserData();
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
            onChangeText={setTitle}
            />
            <Card.Divider />
            <Text>Content</Text>
            <TextInput
            style={styles.textStyle}
            placeholder="Add Content"
            value={content}
            onChangeText={setContent}
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