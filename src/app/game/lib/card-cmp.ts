import { Card, CardPair } from '@MemoryGame/models';

export class CardCmp {
  public static isSameCard(a: Card, b: Card) {
    return a.value === b.value && a.suit === b.suit;
  }

  public static isPair(a: Card, b: Card) {
    return a.value === b.value && a.suit !== b.suit;
  }

  public static cardInCards(card: Card, cards: Card[]): boolean {
    return cards.some(x => CardCmp.isSameCard(x, card));
  }

  public static cardInPair(card: Card, pair: CardPair): boolean {
    return pair.some(x => CardCmp.isSameCard(x, card));
  }

  public static cardInPairs(card: Card, pairs: CardPair[]): boolean {
    return pairs.some(pair => CardCmp.cardInPair(card, pair));
  }
}
