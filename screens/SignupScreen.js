import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'

const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.reg_conatiner}>
      <Text style={styles.reg_text}>Создайте аккаунт</Text>
      <View style={styles.reg_block}>
        <View style={styles.reg_input}>
        <Text style={styles.input_label} >Ваше имя</Text>
        <TextInput />
        </View>
        <View style={styles.reg_input}>
        <Text style={styles.input_label} >Ваше возраст</Text>
        <TextInput />
        </View>
        <View style={styles.reg_input}>
        <Text style={styles.input_label} >E-mail</Text>
        <TextInput />
        </View>
        <View style={styles.reg_input}>
        <Text style={styles.input_label} >Пароль</Text>
        <TextInput />
        </View>
        <View style={styles.reg_input}>
        <Text style={styles.input_label} >Пароль ещё раз</Text>
        <TextInput />
        </View>
        <View style={styles.reg_button}>
      <Button onPress={() => navigation.navigate('Login page')} title="Создать" color={"#000"}/>
      </View>
      </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
    reg_conatiner: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000" 
    },
    reg_text: {
        color: "#FFF",
        marginTop:354,
        fontSize: 34,
        fontWeight: "700",
    },
    reg_block: {
        width: 375,
        height: 812,
        alignItems: "center",
        marginTop: 71,
    },
    reg_input: {
        width: 342,
        height: 40,
        backgroundColor: "#FFF",
        borderRadius: 20,
        marginTop: 47,
    },
    input_label: {
        position: "relative",
        bottom: 25,
        color: "#FFF",
        fontWeight: "200",
        fontSize: 14,
    },
    reg_button: {
        width: 343,
        height: 50,
        backgroundColor: "#F3F285",
        borderRadius: 43,
        marginTop: 85,
        justifyContent: "center"
    }
})


export default SignupScreen