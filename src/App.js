import './App.css';
import Card from './components/Card';


const cardNumber = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
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

function App() {
  return (
    <div>
      {cardSuits.map(item => (
        cardNumber.map(card => (
          <Card handNumber={card} handColour={item.colour} handIcon={item.icon} />
        ))
      ))}
    </div>
  );
}

export default App;
