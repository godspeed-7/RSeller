import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function Icon(props) {
    const {name, size = 40, backgroundColor = '#000', iconColor = 'white'} = props;
  return (
    <View style={{ width: size, height: size, borderRadius: size/2, backgroundColor, justifyContent:'center', alignItems: 'center'}}>
      <MaterialCommunityIcons name={name} color={iconColor} size={size *0.5}></MaterialCommunityIcons>
    </View>
  )
}

const styles = StyleSheet.create({})