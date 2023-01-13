import React, { Component, useEffect, useState } from 'react';
import { Input, Button, Card } from "@rneui/themed";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase';
import * as firebase from "firebase/app";
import ForumPage from './ForumPage';


const ForumList = ({ reRender }) => {
  const [post, setPosts] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPostID, setSelectedPostID] = useState({});
  const [selectedPostContent, setSelectedPostContent] = useState({})
  const [selectedPostTitle, setSelectedPostTitle] = useState({})
  const [selectedPostSetter, setSelectedPostSetter] = useState({})


 

  useEffect(() => {
    const li = []
    const loadData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          li.push(doc.data())
        });
        setPosts(li)
      }
      catch (error) {
        alert(error.message)
      }

    }
    loadData()
  }, [reRender]);

  const handlePress = (item) => {
    //console.log('Pressed', item.postID);
    setModalVisible(true)
    setSelectedPostID(item.postID);
    setSelectedPostTitle(item.title);
    setSelectedPostContent(item.content);
    setSelectedPostSetter(item.userEmail);
  }


  return (
    <View>
      
    
      <View>
      
        <FlatList
          data={post}
          renderItem={
            ({ item }) =>
              <TouchableOpacity onPress={() => handlePress(item)}>
                <Card>
                  <Text style={styles.textStyle}>{item.title}</Text>
                  <Text> </Text>
                  <ForumPage
                    visible={modalVisible}
                    setVisible={setModalVisible}
                    postDocId={selectedPostID}
                    postTitle={selectedPostTitle}
                    postContent={selectedPostContent}
                    postSetter={selectedPostSetter}
                  />

                </Card>
              </TouchableOpacity>
              
          }
        />
      </View>
      <View>

      </View>
     
    </View>
  )
}
export default ForumList;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  }
});
