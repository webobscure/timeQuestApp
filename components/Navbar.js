
import { useNavigation } from "@react-navigation/native";
import {React} from "react";
import { View, Image, Button, StyleSheet } from "react-native";
 export default function Navbar() {
  const navigation = useNavigation()
    const handlePress =(event) => {

        switch(event) {
        case "home": 
        navigation.navigate("Home page")
        break;
        case "event":
        navigation.navigate("Event page")
        break;
        case "fav":
        navigation.navigate("Favorite page")
        break;
        case "profile":
        navigation.navigate("Profile page")
        break;
        
        }

    }
    return (
        <>
        <View style={styles.bottom_panel}>
        <View style={styles.panelItem}>
          <Image source={require("../assets/home.png")} style={styles.bottom_pannel__image} />
          <Button title="Главная" color={"#B4B4B4"} onPress={() => handlePress("home")}/>
        </View>
        <View style={styles.panelItem}>
          <Image source={require("../assets/event.png")} style={styles.bottom_pannel__image} />
          <Button title="События" color={"#B4B4B4"} onPress={() => handlePress("event")}/>
        </View>
        <View style={styles.panelItem}>
          <Image source={require("../assets/save.png")} style={styles.bottom_pannel__image} />
          <Button title="Избранное" color={"#B4B4B4"} onPress={() => handlePress("fav")}/>
        </View>
        <View style={styles.panelItem}>
          <Image source={require("../assets/profile.png")} style={styles.bottom_pannel__image} />
          <Button title="Профиль" color={"#B4B4B4"} onPress={() => handlePress("profile")}/>
        </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    bottom_panel: {
        backgroundColor: "#222",
        position: "absolute",
        width: 386,
        height: 66,
        bottom: 40,
        left: 25,
        borderRadius: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
      },
      panelItem: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      },
})
