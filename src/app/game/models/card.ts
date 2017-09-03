export type CardSuit = 'hearts' | 'clubs' | 'diamonds' | 'spades';
export type CardValue = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K'  | 'A';

export interface Card {
  suit: CardSuit;
  value: CardValue;
}
