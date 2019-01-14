import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10
  },
  btn2: {
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 10
  },
  btnText: {
    color: 'white',
  },
  deckContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  deck: {
    padding: 15
  },
  deckTitle: {
    fontSize: 10
  }
});

export default styles;
