import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import ShowCards from './components/ShowCards';
import Btn from './components/Btn';

//Card Number
const cardNumber = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

//Card Suits
const cardSuits = [
  {
    icon: "♣",
    colour: "black"
  },
  {
    icon: "♠",
    colour: "black"
  },
  {
    icon: "♥",
    colour: "red"
  },
  {
    icon: "♦",
    colour: "red"
  }
];

const drawnCardArray = [];

function App() {
  //defining card states
  const cardArray = [];
  const [getcardsArray, setcardsArray] = useState([]);
  const [getdrawnCard, setdrawnCard] = useState([]);

  //Puts cards together as a deck.
  const cardsinArray = (event) => {
    event.preventDefault();
    event.target.remove();
    let cardAmount = 0;
    cardSuits.map((item, cardIndex) =>
      cardNumber.map(
        (card, index) => (
          cardArray.push(
            <Card
              key={`${Math.random()}`}
              handNumber={card}
              handColour={item.colour}
              handIcon={item.icon}
              indexValue={cardAmount}
              cardNum={index}
              handIndex={cardIndex}
              handleChoice={drawCard}
            />),
          cardAmount = cardAmount + 1
        )
      )
    )

    cardArray.map(item =>
      setcardsArray(prevState =>
        [
          ...prevState,
          item
        ])
    )
  }

  //Shuffling the cards randomly and mapping it to setState.
  const shuffleCards = () => {
    setcardsArray(prevState =>
      [
        ...prevState.sort(() => Math.random() - 0.5)
      ])
  };

  //drawing card function. Includes sorting via numbers, colour and then hand and stores it into usestate. 
  const drawCard = (card) => {
    const obj = cardArray[card];

    setcardsArray(prevState =>
      [
        ...prevState.filter(function (item) {
          return item !== obj
        }),
      ]
    )

    drawnCardArray.push(obj);
    console.log(obj.props.cardNum);
    console.log(obj.props.handIndex);

    drawnCardArray.sort(function (a, b) {
      if (parseInt(a.props.cardNum) > parseInt(b.props.cardNum)) {
        return 1;
      }
      return -1
    })

    drawnCardArray.sort(function (a, b) {
      if (a.props.handColour === "black" && a.props.handColour !== b.props.handColour) {
        return -1;
      }
      else if (a.props.handColour === "red" && a.props.handColour !== b.props.handColour) {
        return 1;
      }
      return 0;
    })

    drawnCardArray.sort(function (a, b) {
      if (a.props.handIndex > b.props.handIndex) {
        return 1;
      }
      return -1
    })

    setdrawnCard(drawnCardArray);
  }


  //parsing props to components and rendering the app
  return (
    <div className='app'>
      <h1> DECK OF CARDS </h1>
      <div className='btn-container'>
        <Btn onClick={cardsinArray} text="OPEN DECK" />
        <Btn onClick={shuffleCards} text="SHUFFLE DECK" />
      </div>
      {/* displays the cards deck of cards */}
      <div>
        <ShowCards showcards={getcardsArray} />
      </div>
      <div>
        <h1>DRAWN CARDS</h1>
        <ShowCards showcards={getdrawnCard} />
      </div>
    </div>
  );
}

export default App;
