let decks = {
  1: {
    id: 1,
    name: 'Biology',
    cards: [1,2,6,7]
  },
  2: {
    id: 2,
    name: 'History',
    cards: [3,4,5]
  }
}

let cards = {
  1: {
    id: 1,
    question: 'The powerhouse of the cell',
    answer: 'Mitochondria',
    deckID: 1
  },
  2: {
    id: 2,
    question: 'The process of cells splitting',
    answer: 'Mitosis',
    deckID: 1
  },
  3: {
    id: 3,
    question: 'Who delivered the Gettysburg Address?',
    answer: 'Abraham Lincoln',
    deckID: 2
  },
  4: {
    id: 4,
    question: 'The first President',
    answer: 'George Washington',
    deckID: 2
  },
  5: {
    id: 5,
    question: 'Year Man landed on the Moon',
    answer: '1969',
    deckID: 2
  },
  6: {
    id: 6,
    question: '3 types of muscle cell',
    answer: 'Smooth, cardiac, skeletal',
    deckID: 1
  },
  7: {
    id: 5,
    question: 'Largest organ in the body',
    answer: 'Skin',
    deckID: 1
  },
}


export function _getDecks () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...decks}), 200)
  })
}

export function _getCards () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...cards}), 200)
  })
}
