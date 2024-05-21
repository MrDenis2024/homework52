import Card from './Card';


const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits = ['diams', 'hearts', 'clubs', 'spades'];

class CardDeck {
    public cardList: Card[] = [];

    constructor() {
        this.сreationCardList();
    }

    сreationCardList = () => {
        for (const suit of suits) {
            for (const rank of ranks) {
                this.cardList.push(new Card(rank, suit));
            }
        }
    };

    getCard(): Card {
        const randomIndex = Math.floor(Math.random() * this.cardList.length);
        return this.cardList.splice(randomIndex, 1)[0];
    }

    getCards(howMany: number): Card[] {
        const cards: Card[] = [];
        for (let i = 0; i < howMany; i++) {
            cards.push(this.getCard());
        }
        return cards;
    }
}

export default CardDeck;