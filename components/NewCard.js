import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from '../styles/stylesheet.js'
import { addCard } from '../actions/card'
import Form from 'react-native-form'

class NewCard extends Component {

  handleAddCard() {
    const { deckID } = this.props
    console.log(this.refs)
    console.log(this.props.navigation)
    //const card = this.refs.form.getValues()
    //console.log(card)
    //this.props.dispatch(addCard(card, deckID))
  }

  render(){
    return (
        <View style={styles.container}>
          <Form ref='form'>
            <View>
              <Text>Card Question</Text>
              <TextInput key='1' type="TextInput" name="question" />
              <Text>Card Answer</Text>
              <TextInput key='2' type="TextInput" name="answer" />
              <TouchableOpacity style={styles.btn} onPress={() => this.handleAddCard()}>
                <Text style={styles.btnText}>Add Card</Text>
              </TouchableOpacity>
            </View>
        </Form>
      </View>
    )
  }
}

export default NewCard
