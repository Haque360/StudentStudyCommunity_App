import React, { useState, useEffect } from 'react';
import { View, Button, Modal, StyleSheet, Text } from 'react-native';
import { Input, Card } from "@rneui/themed";
import Comments from './Comments';

const ForumPage = ({ visible, setVisible, postDocId, postTitle, postContent, postSetter }) => {


    return (
        <Modal animationType="slide" visible={visible}>
            <View style={styles.viewStyle}>
                <View style={styles.buttonContainer}>
                    <Text>  </Text>
                    <Button style={styles.button} title="Close" onPress={() => setVisible(false)} />
                </View>
                <Card>
                    <Text style={styles.textStyle3}>{postTitle}</Text>
                    <Text style={styles.textStyle}>{postContent}</Text>
                    <Text style={styles.textStyle2}>asked by: {postSetter}</Text>
                    <Text style={styles.textStyle2}>{postDocId}</Text>

                </Card>
                <Comments
                    DocID={postDocId}
                />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: "#0081C9",
    },
    textStyle: {
        fontSize: 20,
        borderColor: "#d4d4d4",
    },
    textStyle2: {
        fontSize: 12,
        color: "gray",
        borderColor: "#d4d4d4",
    },
    textStyle3: {
        fontSize: 30,
        borderColor: "#d4d4d4",
    },
    button: {
        marginLeft: 20,
        padding: 30,
        width: '20%',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        alignItems: 'center',
        backgroundColor: "skyblue",
        height: '6%',
    }

});

export default ForumPage;