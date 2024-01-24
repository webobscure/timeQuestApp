import React from "react";
import {View, Text, Image, Button, StyleSheet} from 'react-native'
import { theme } from "../theme/theme";


export default function IntroScreen({navigation}) {
    return (
        <View className="flex-1 items-center justify-center bg-red" style={{backgroundColor: theme.bgYellow(1)}}>
            <Text className="text-4xl font-bold">Добро пожаловать в TimeQuest</Text>
            <View className="flex-row flex justify-between">
            <Image source={require('../assets/woman.png')} className="z-50 h-full"/>
            <Image source={require('../assets/human.png')} className="z-50 ml-2"/>
            <Image source={require('../assets/humanthree.png')} className="z-50 ml-2"/>
            </View>      

            <View className="absolute bottom-10 bg-purple-600 " style={styles.button}>
    
            <Button onPress={() => navigation.navigate('Navigation page')} title="Далее" style={styles.button_text} color={"#FFF"}/>      

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 300,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
    },
    button_text: {
        color: "red"
    }
})
