import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/stylesheet.js'
import { createStackNavigator, createAppContainer } from 'react-navigation'

class NewDeck extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Deck Title</Text>
        <TextInput />
        <Text>Description</Text>
        <TextInput />
        <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('AddDeck')}>
          <Text style={styles.btnText}>Add Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default NewDeck
