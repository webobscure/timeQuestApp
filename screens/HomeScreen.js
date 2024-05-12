import { Text, View, StyleSheet, Image, TouchableOpacity, Button } from "react-native";
import React, { Component, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebase";
import Navbar from "../components/Navbar";


  export default function HomeScreen({navigation}) {
    const [user, setUser] = useState()

    useEffect(() => {
      onAuthStateChanged(FIREBASE_AUTH, (user) => {
        console.log(user)
        setUser(user)
      })
    },[])
    return (
      <>
      {user ? (
        <View style={styles.black_container} class="h-full">
        <View style={styles.header_panel}>
          <Image
            source={require("../assets/avatar.png")}
            style={styles.image_avatar}
          />
          
          <Image source={require("../assets/heart.png")} style={styles.heart_img}/>
          <Image source={require("../assets/search.png")} />
        </View>
        <View style={styles.content_container}>
          <View style={styles.bronze_century}>
            <Text style={styles.century_title}>Бронзовый Век</Text>
            <TouchableOpacity style={styles.oneRow} horizontal={true}>
              <Image source={require("../assets/content.png")} style={styles.contentImage}/>
              <Image source={require("../assets/contentThree.png")} style={styles.contentImage}/>
              <Image source={require("../assets/contentTwo.png")} style={styles.contentImage}/>
            </TouchableOpacity>
          </View>
          <View style={styles.silver_century}>
            <Text style={styles.century_title}>Серебрянный Век</Text>
            <TouchableOpacity style={styles.oneRow} horizontal={true}>
              <Image source={require("../assets/content.png")} style={styles.contentImage}/>
              <Image source={require("../assets/contentTwo.png")} style={styles.contentImage}/>
              <Image source={require("../assets/contentThree.png")} style={styles.contentImage}/>
            </TouchableOpacity>
          </View>
          <View style={styles.gold_century}>
            <Text style={styles.century_title}>Золотой Век</Text>
            <TouchableOpacity style={styles.oneRow} horizontal={true}>
              <Image source={require("../assets/contentThree.png")} style={styles.contentImage}/>
              <Image source={require("../assets/contentThree.png")} style={styles.contentImage}/>
              <Image source={require("../assets/contentTwo.png")} style={styles.contentImage}/>
            </TouchableOpacity>
          </View>
        </View>
        <Navbar />
      </View>
      ) : (<Text>Hello</Text>)}
      </>
    );
  }
 

const styles = StyleSheet.create({
  black_container: {
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
  },
  
  century_title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 10
  },
  content_container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  oneRow: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  header_panel: {
    width: "100%",
    height: 56,
    position: "absolute",
    top: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image_avatar: {
    height: 56,
    width: 56,
    position: "relative",
    left: 10,
  },
  bronze_century: {
    marginTop: 50
  },
  silver_century: {
    marginTop: 30
  },
  
  gold_century: {
    marginTop: 20
  },
  contentImage: {
    width: 243,
    height: 170
  },
  bottom_pannel__image: {
    width: 15,
    height: 18
  },
  heart_img: {
    left: 80
  },
});

