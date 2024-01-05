import {
  StyleSheet,
  ImageBackground,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { deviceHeight, deviceWidth } from "./Dimensions";
import { Entypo } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
import cities from "../data/Data";
import Card from "./Card";

export default function Home(props) {
  const [city, setCity] = useState("");
  return (
    <View>
      <StatusBar style="light" />
      <ImageBackground
        source={require("../assets/images/image8.png")}
        style={styles.back_img}
        blurRadius={60}
      />

      <View style={styles.icons_div1}>
        <View style={styles.icons_div2}>
          <Entypo name="menu" size={46} color="white" />
          <Image
            source={require("../assets/images/astronaut.jpg")}
            style={styles.user_img}
          />
        </View>

        <View style={styles.country}>
          <Text style={styles.country_name}>Pakistan</Text>
        </View>

        <View style={styles.search_country_view}>
          <TextInput
            value={city}
            onChangeText={(e) => {
              setCity(e);
            }}
            placeholder="Search City "
            placeholderTextColor="white"
            style={styles.search_country_input}
          />
          <TouchableOpacity onPress={() => props.navigation.navigate('Details', {name: city})}>
            <FontAwesome
              name="search"
              size={22}
              color="white"
            />
          </TouchableOpacity>
        </View> 

        <Text style={styles.my_location}>My Locations</Text>
        <FlatList horizontal data={cities} renderItem={({item}) => (
          <Card 
          name={item.name}
          image={item.image}
          navigation={props.navigation}
          />
  )}/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  back_img: {
    height: deviceHeight,
    width: deviceWidth,
  },
  icons_div1: {
    position: "absolute",
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  icons_div2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: deviceWidth - 40,
  },
  user_img: {
    height: 46,
    width: 46,
    borderRadius: 50,
  },
  country: {
    marginTop: 100,
    paddingHorizontal: 40,
  },
  country_name: {
    fontSize: 40,
    color: "white",
    paddingHorizontal: 30,
  },
  search_country_view: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "white",
    marginVertical: 20,
    paddingRight: 15,
  },
  search_country_input: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: "white",
    fontSize: 17,
  },
  my_location: {
    color: "white",
    fontSize: 25,
    paddingHorizontal: 10,
    marginTop: 180
  }
});
