import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { deviceHeight, deviceWidth } from './Dimensions'

export default function Card({name, image, navigation}) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Details", {name})}>
      <ImageBackground source={image} style={styles.image_bg} imageStyle={{borderRadius: 20}} blurRadius={40}/>
      <View style={styles.name_container}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
container: {
    marginHorizontal: 10,
    marginTop: 15
},
image_bg: {
    height: deviceHeight / 5,
    width: deviceWidth / 2 - 50,
},
name_container: {
    position: 'absolute',
    height: '100%',
    width: '100%'
},
name:{
    fontSize: 25,
    width: '100%',
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
}
})