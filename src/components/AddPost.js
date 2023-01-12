import React, { useState } from 'react';
import { View, TextInput, Button, Modal,StyleSheet ,Text} from 'react-native';
import { Input, Card } from "@rneui/themed";
// import * as firebase from 'firebase';

const AddPost = ({ visible, setVisible }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddPost = () => {
    // const userId = firebase.auth().currentUser.uid;
    // firebase.database().ref(`posts/${userId}`).push({
    //   title,
    //   content
    // });
    setTitle('');
    setContent('');
    setVisible(false);
  };

  return (
    <Modal animationType="slide" visible={visible}>
      <View>
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
              <Button styles={styles.button} title="Cancel" onPress={() => setVisible(false)} />
            </View>
        </Card>
      
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    container:{
     justifyContent:'center',
     alignItems:'center'
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