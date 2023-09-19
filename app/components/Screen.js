import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  Constants  from 'expo-constants'

export default function Screen(props) {
  const {style, children} = props;
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {/* <View>{props.children}</View> */}
      {props.children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  }
})