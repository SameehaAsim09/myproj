import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import { deviceHeight, deviceWidth } from "./Dimensions";
import { Entypo } from "@expo/vector-icons";
import API_KEY from "./Constants";

export default function Details(props) {
  const [data, setData] = useState();
  const { name } = props.route.params;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

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
        {data ? (
          <View style={styles.data_container1}>
            <View>
              <Text style={styles.data_name}>{name}</Text>
              <Text style={styles.data_details}>
                {data["weather"][0]["main"]}
              </Text>
            </View>
            <Text>{data['main']['temp']-273} &deg; C</Text>
          </View>
        ) : null}
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
  data_container1: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: deviceHeight - 100,
  },
  data_name: {
    color: "white",
    fontSize: 40,
  },
  data_details: {
    fontSize: 22,
    color: "white",
  },
});
