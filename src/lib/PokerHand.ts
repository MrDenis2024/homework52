import Card from "./Card.ts";

class PokerHand {
    handCards: Card[] = [];
    constructor(cards: Card[]) {
        this.handCards = cards;
    }

    getOutcome() {
        if (this.flush()) {
            return 'Флеш';
        } else if (this.threeOfAKind()) {
            return 'Тройки';
        } else if (this.pairs() === 2) {
            return 'Две пары';
        } else if (this.pairs() === 1) {
            return 'Одна пара';
        } else {
            return 'Старшая карта';
        }
    }

    flush() {
        const firstSuit = this.handCards[0].suit;
        return this.handCards.every((card) => card.suit === firstSuit);
    }

    threeOfAKind() {
        for (let i = 0; i < this.handCards.length - 2; i++) {
            for (let j = i + 1; j < this.handCards.length - 1; j++) {
                for (let k = j + 1; k < this.handCards.length; k++) {
                    if (this.handCards[i].rank === this.handCards[j].rank && this.handCards[i].rank === this.handCards[k].rank) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    pairs() {
        let count = 0;
        for (let i = 0; i < this.handCards.length - 1; i++) {
            for (let j = i + 1; j < this.handCards.length; j++) {
                if (this.handCards[i].rank === this.handCards[j].rank) {
                    count = count + 1;
                }
            }
        }
        return count;
    }

}

export default PokerHand;