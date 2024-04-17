import {React} from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.profile_container}>
            <Image
            source={require("../assets/avatar.png")}
            style={styles.image_avatar}
          />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000" 
    },
    profile_container: {
       
    },
    text: {
        color: "#FFF"
    }
})