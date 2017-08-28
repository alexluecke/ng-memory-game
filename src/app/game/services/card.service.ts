import { Card, CardValue } from '../models/card';
import { Injectable } from '@angular/core';

@Injectable()
export class CardService {
  private displayDeck: { [key: number]: Card };

  constructor() { }

  public encode(card: Card): number {
    return 0;
  }

  public decode(value: CardValue): Card {
    return null;
  }


  public getCardValues(): number[] {
    return Array.apply(null, Array(52)).map((x, i) => i);
  }

  private getCards(): Card[] {
    return [];
  }
}
