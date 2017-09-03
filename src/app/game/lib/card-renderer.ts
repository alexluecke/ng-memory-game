import { Card } from '@MemoryGame/models';

export class CardRenderer {
  public static toString(card: Card): string {
    return `${card.suit.charAt(0).toUpperCase() + card.suit.slice(1)}: ${card.value}`;
  }
}
