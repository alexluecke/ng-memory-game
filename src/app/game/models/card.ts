export type Suit = 'hearts' | 'clubs' | 'diamonds' | 'spades';
export type CardDisplay = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K'  | 'A';
export type CardValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface Card {
  suit: Suit;
  value: CardValue;
  display: CardDisplay;
}
