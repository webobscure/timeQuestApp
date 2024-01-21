import React from "react";
import {View, Text, Image, Button} from 'react-native'
import { theme } from "../theme/theme";


export default function IntroScreen() {
    return (
        <View className="flex-1 items-center justify-center bg-red" style={{backgroundColor: theme.bgYellow(1)}}>
            <Text className="text-4xl font-bold">Добро пожаловать в TimeQuest</Text>
            <View className="flex-row flex justify-between">
            <Image source={require('../assets/woman.png')} className="z-50 h-full"/>
            <Image source={require('../assets/human.png')} className="z-50 ml-2"/>
            <Image source={require('../assets/humanthree.png')} className="z-50 ml-2"/>
            </View>      

            <View className="absolute bottom-10">
            <Button title="Далее" className="rounded-full text-black" style={{backgroundColor: theme.btnPurple(1)}}/>      

            </View>
        </View>
    )
}