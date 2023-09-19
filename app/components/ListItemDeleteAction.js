import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function ListItemDeleteAction(props) {
    const {onPress} = props;
  return (
    <TouchableNativeFeedback onPress={onPress}>
    <View style={styles.container}>
        <MaterialCommunityIcons name='trash-can' color={colors.white} size={32}/>
    </View>
    </TouchableNativeFeedback>
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