import { StyleSheet, ImageBackground, View } from 'react-native'
import React from 'react'
import { deviceHeight, deviceWidth } from './Dimensions'

export default function Home() {
  return (
    <View>
      <ImageBackground source={require('../assets/images/image2.jpg')}  style={styles.back_img} blurRadius={10}/>
    </View>
  )
}
const styles = StyleSheet.create({
back_img: {
    height: deviceHeight,
    width: deviceWidth,
}
})