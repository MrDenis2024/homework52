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
        const filteredCards = dealtCards.filter(card => card !== undefined);
        setCards(filteredCards);
    };


  return (
      <>
          <p>Колличество кард в коллоде {deck.cardList.length}</p>
          {
              cards.length !== 0 ? <div>
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
