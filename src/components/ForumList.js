import React, { Component ,useEffect,useState} from 'react';
import { Input, Button, Card } from "@rneui/themed";
import { View, Text, FlatList, TouchableOpacity,StyleSheet} from 'react-native';
import { collection, query, where, getDocs } from "firebase/firestore"; 
import { db } from '../../firebase';
import * as firebase from "firebase/app";


const ForumList = () => {
  const[post,setPosts]=useState([])

  useEffect(() => {
    const li=[]
    const loadData = async () => {
      try{
        const querySnapshot = await getDocs(collection(db, "posts"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          li.push(doc.data())
         });
         setPosts(li)
      }
      catch(error){
        alert(error.message)
      }
        
    }
    loadData()
   }, [setPosts]);


  //  async function readData() 
  // {
  //   setPosts([])
  //   const allPosts=[]
  //   const querySnapshot =  getDocs(collection(db, "posts"));
  //   querySnapshot.forEach((post) => {
  //   {allPosts.push({key: post.id, name: post.data().name} )}
  //   });
  //   setPosts(allPosts)
  // }
  const handlePress = (item) => {
    console.log('Pressed', item);
  }


  return(
    <View>
      <FlatList
      data={post}
      renderItem={
        ({item})=>
        <TouchableOpacity onPress={() => handlePress(item)}>
          <Card>
            <Text style={styles.textStyle}>{item.title}</Text>
         </Card>
        </TouchableOpacity>
      }
      />
    </View>
  )
}
export default ForumList;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  }
  });
