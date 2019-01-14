import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/stylesheet.js'

class Quiz extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>This is a Quiz</Text>
      </View>
    )
  }
}

export default Quiz
