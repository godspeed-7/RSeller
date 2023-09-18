import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function ListItemDeleteAction() {
  return (
    <View style={styles.container}>
        <MaterialCommunityIcons name='trash-can' color={colors.white} size={32}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        justifyContent: 'center',
        alignItems:'center'
    }
})