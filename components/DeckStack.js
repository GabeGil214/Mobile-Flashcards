import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/stylesheet.js'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import NewCard from './NewCard'
import Quiz from './Quiz'
import Deck from './Deck'

const DeckStack = createStackNavigator({
  NewCard: {
    screen: NewCard,
  },
  Deck: {
    screen: Deck,
  },
  Quiz: {
    screen: Quiz
  }
})

export default createAppContainer(DeckStack)
