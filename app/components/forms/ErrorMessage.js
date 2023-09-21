import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../Text'

export default function ErrorMessage(props) {
    console.log('====================================');
    console.log(props);
    console.log('====================================');
    const {error, visible} = props;
    if(!error || !visible) return null;
  return (
     <AppText style={styles.error}>{error}</AppText>
  )
}

const styles = StyleSheet.create({
    error: {
        color: 'red'
    }
})