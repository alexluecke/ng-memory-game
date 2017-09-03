import { Card, CardValue } from '@MemoryGame/models';
import { Injectable } from '@angular/core';
import { cardValues, cardSuits } from '@MemoryGame/fixtures';

@Injectable()
export class CardService {
  private displayDeck: { [key: number]: Card };

  constructor() { }

  public getCards(): Card[] {
    return cardSuits.reduce((acc, suit) => {
      return acc.concat(
        cardValues.reduce((cards , value) => {
          return [ ...cards, { suit, value } ];
        }, [])
      );
    }, []);
  }
}
