import './App.css';
import GameCard from "./components/GameCard/GameCard.tsx";
import CardDeck from "./lib/CardDeck.ts";
import {useState} from "react";
import Card from "./lib/Card.ts";



const App = () => {
    const [cards, setCards] = useState<Card[]>([]);
    const [deck] = useState(new CardDeck());

    const giveCards = () => {
        const dealtCards = deck.getCards(5);
        setCards(dealtCards);
    };

  return (
      <>
          <button onClick={giveCards}>asd</button>
          <div className="playingCards faceImages">
              <GameCard rank={'10'} suit={'hearts'}/>
          </div>
      </>
  );
};

export default App;
