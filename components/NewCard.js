import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/stylesheet.js'

class NewCard extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Card Question</Text>
        <TextInput />
        <Text>Card Answer</Text>
        <TextInput />
        <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('AddDeck')}>
          <Text style={styles.btnText}>Add Card</Text>
        </TouchableOpacity>
      </View>
    )
    )
  }
}

export default NewCard
