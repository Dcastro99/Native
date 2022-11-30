import React from 'react'
import { Text, View } from 'react-native';
import { appStyles } from '../styles/appStyle'

export default function Test() {
  return (

    <View style={appStyles.body}>
      <Text style={appStyles.title}>Hello</Text>
    </View>
  )
}

