import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { AuthContext } from '../providers/AuthProvider';

const LogOut = () => {
    return (
        <AuthContext.Consumer>
          {(auth) => (
            <View>
                <Button
                  style={styles.button}
                  type="outline"
                  title="Log Out"
                  onPress={() => {
                    auth.setIsLoggedIn(false);
                  }}
                />
            </View>
           
          )}
        </AuthContext.Consumer>
    
      );
}

export default LogOut

const styles = StyleSheet.create({
    button: {
        marginLeft: 20,
        padding: 30,
      }
})