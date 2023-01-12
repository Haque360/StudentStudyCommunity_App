import { StyleSheet, Text, View,TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'
import { db } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { Button, Card } from '@rneui/base';

const Comments = ({DocID}) => {
 const[comment,setComment]=useState('')
 const[email,setEmail]=useState('')

 useEffect(() => {
    const auth = getAuth();
    setEmail(auth.currentUser.email)
  }, [email]);

  const handleComment=()=>{
    setComment('');
    addDoc(collection(db,"comment"),{
        content:comment,
        postID:DocID,
        user:email
    }).then(()=>{
        alert("Comment Posted")
    }).catch((error)=>{
        alert(error.message)
    })
  }
  return (
    <View>
      <Card>
        <Text>Comments</Text>
        <TextInput 
        style={styles.textStyle}
        placeholder="Add Comment"
        value={comment}
        onChangeText={(comment) => { setComment(comment) }}
        />
      
        <View style={styles.button}>
            <Button
            title="Add"
            onPress={handleComment} 
            />
        </View>
      </Card>
    </View>
  )
}

export default Comments

const styles = StyleSheet.create({
    button: {
        width:'10%',
      },
})