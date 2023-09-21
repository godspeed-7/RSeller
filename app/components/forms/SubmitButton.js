import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppButton from '../Button'
import { useFormikContext } from 'formik';

export default function SubmitButton(props) {
    const {title} = props;
    const {handleSubmit} = useFormikContext();
  return (
    <AppButton title={title} onPress={handleSubmit} />
  )
}

const styles = StyleSheet.create({})