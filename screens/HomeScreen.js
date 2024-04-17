import { Text, View, StyleSheet, Image, TouchableOpacity, Button } from "react-native";
import React, { Component, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebase";


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
            <TouchableOpacity style={styles.oneRow}>
              <Image source={require("../assets/content.png")} style={styles.contentImage}/>
              <Image source={require("../assets/contentThree.png")} style={styles.contentImage}/>
              <Image source={require("../assets/contentTwo.png")} style={styles.contentImage}/>
            </TouchableOpacity>
          </View>
          <View style={styles.silver_century}>
            <Text style={styles.century_title}>Серебрянный Век</Text>
            <TouchableOpacity style={styles.oneRow}>
              <Image source={require("../assets/content.png")} style={styles.contentImage}/>
              <Image source={require("../assets/contentTwo.png")} style={styles.contentImage}/>
              <Image source={require("../assets/contentThree.png")} style={styles.contentImage}/>
            </TouchableOpacity>
          </View>
          <View style={styles.gold_century}>
            <Text style={styles.century_title}>Золотой Век</Text>
            <TouchableOpacity style={styles.oneRow}>
              <Image source={require("../assets/contentThree.png")} style={styles.contentImage}/>
              <Image source={require("../assets/contentThree.png")} style={styles.contentImage}/>
              <Image source={require("../assets/contentTwo.png")} style={styles.contentImage}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottom_panel}>
        <View style={styles.panelItem}>
          <Image source={require("../assets/home.png")} style={styles.bottom_pannel__image} />
          <Button title="Главная" color={'#B4B4B4'}/>
        </View>
        <View style={styles.panelItem}>
          <Image source={require("../assets/event.png")} style={styles.bottom_pannel__image} />
          <Button title="События" color={'#B4B4B4'}/>
        </View>
        <View style={styles.panelItem}>
          <Image source={require("../assets/save.png")} style={styles.bottom_pannel__image} />
          <Button title="Избранное" color={'#B4B4B4'}/>
        </View>
        <View style={styles.panelItem}>
          <Image source={require("../assets/profile.png")} style={styles.bottom_pannel__image} />
          <Button title="Профиль" color={'#B4B4B4'} onPress={() => navigation.navigate("Profile page")}/>
        </View>
        </View>
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
  bottom_panel: {
    backgroundColor: '#222',
    position: "absolute",
    width: 386,
    height: 66,
    bottom: 40,
    left: 25,
    borderRadius: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
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
  panelItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
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

