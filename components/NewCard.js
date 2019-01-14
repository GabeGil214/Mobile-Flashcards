import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/stylesheet.js'

class NewCard extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>This is a New Card</Text>
      </View>
    )
  }
}

export default NewCard
