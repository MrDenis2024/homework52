import './App.css';
import GameCard from "./components/GameCard/GameCard.tsx";
import CardDeck from "./lib/CardDeck.ts";
import {useState} from "react";
import Card from "./lib/Card.ts";
import PokerHand from "./lib/PokerHand.ts";



const App = () => {
    const [cards, setCards] = useState<Card[]>([]);
    const [results, setResults] = useState('');

    const giveCards = () => {
        const deck = new CardDeck();
        const dealtCards = deck.getCards(5);
        const filteredCards = dealtCards.filter(card => card !== undefined);
        setCards(filteredCards);
        const hand = new PokerHand(filteredCards);
        setResults(hand.getOutcome());
    };


  return (
      <>
          {
              cards.length !== 0 ? <div>
                  <p>Рузультат стола: {results}</p>
                  <button className="btn" onClick={giveCards}>Раздать карты</button>
                  <div className="playingCards faceImages">
                      {cards.map((card) => (
                          <GameCard key={card.rank + card.suit} rank={card.rank} suit={card.suit}/>
                      ))}
                  </div>
              </div> : <div>
                  <button className='btn' onClick={giveCards}>Раздать карты</button>
              </div>
          }
      </>
  );
};

export default App;
