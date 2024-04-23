import {React} from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Navbar from '../components/Navbar';
export default function ProfileScreen() {
    return (
       <>
        <View style={styles.container}>
            <View style={styles.profile_container}>
            <Image
            source={require("../assets/avatar.png")}
            style={styles.image_avatar}
          />
          <Text style={styles.avatar_text}>Скоро здесь будет аккаунт</Text>
            </View>
            <Navbar />
        </View>
       </>
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
    },
    avatar_text: {
        color: "#FFF"
    }
})