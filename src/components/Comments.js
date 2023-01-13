import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'
import { db } from '../../firebase';
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { Button, Card } from '@rneui/base';

const Comments = ({ DocID }) => {
    const [comment, setComment] = useState('')
    const [email, setEmail] = useState('')
    const [allComments, setAllComments] = useState([])

    useEffect(() => {
        const li = []
        const loadData = async () => {
            try {
                const q = query(collection(db, "comment"), where("postID", "==", DocID));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    // console.log(doc.id, " => ", doc.data());
                    li.push(doc.data())
                });
                setAllComments(li)
            }
            catch (error) {
                alert(error.message)
            }

        }
        loadData()
    }, [setAllComments]);

    useEffect(() => {
        const auth = getAuth();
        setEmail(auth.currentUser.email)
    }, [email]);

    const handleComment = () => {
        setComment('');
        addDoc(collection(db, "comment"), {
            content: comment,
            postID: DocID,
            user: email
        }).then(() => {
            alert("Comment Posted")
        }).catch((error) => {
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
                <View>
                    <FlatList
                        data={allComments}
                        renderItem={
                            ({ item }) =>
                                <Card>
                                    <Text style={styles.textStyle}>{item.user}</Text>
                                    <Text >{item.content}</Text>
                                </Card>
                        }
                    />
                </View>
            </Card>
        </View>
    )
}

export default Comments

const styles = StyleSheet.create({
    button: {
        width: '10%',
    },
    textStyle: {
        color: "gray"
    }
})