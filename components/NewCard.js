import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from '../styles/stylesheet.js'
import { addCard } from '../actions/card'
import Form from 'react-native-form'

class NewCard extends Component {

  handleAddCard(card) {
    const { deckID } = this.props

    this.props.dispatch(addCard(card, deckID))
  }

  render(){
    return (
      <View style={styles.container}>
        <Form>
          <Text>Card Question</Text>
          <TextInput />
          <Text>Card Answer</Text>
          <TextInput />
          <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('AddDeck')}>
            <Text style={styles.btnText}>Add Card</Text>
          </TouchableOpacity>
        </Form>
      </View>
    )
  }
}

export default NewCard
