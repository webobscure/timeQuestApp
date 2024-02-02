import { Text, View, StyleSheet, Image, TouchableOpacity, Button } from "react-native";
import React, { Component } from "react";

export class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.black_container} class="h-full">
        <View style={styles.header_panel}>
          <Image
            source={require("../assets/avatar.png")}
            style={styles.image_avatar}
          />
          <Image source={require("../assets/heart.png")} />
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
          <Image source={require("../assets/avatar.png")} />
          <Button title="Главная" color={'#B4B4B4'}/>
        </View>
        <View style={styles.panelItem}>
          <Image source={require("../assets/avatar.png")} />
          <Button title="События" color={'#B4B4B4'}/>
        </View>
        <View style={styles.panelItem}>
          <Image source={require("../assets/avatar.png")} />
          <Button title="Избранное" color={'#B4B4B4'}/>
        </View>
        <View style={styles.panelItem}>
          <Image source={require("../assets/avatar.png")} />
          <Button title="Профиль" color={'#B4B4B4'}/>
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  black_container: {
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
  },
  bottom_panel: {
    backgroundColor: '#FFF',
    position: "absolute",
    width: 346,
    height: 56,
    bottom: 40,
    left: 40,
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
    marginBottom: 30
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
    marginTop: 150
  },
  silver_century: {
    marginTop: 60
  },
  panelItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
 
  gold_century: {
    marginTop: 60
  },
  contentImage: {
    width: 243,
    height: 170
  }
});

export default HomeScreen;
