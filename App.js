import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './components/Dashboard';
import { createStore } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore(reducer)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <Dashboard />
      </Provider>
    );
  }
}
