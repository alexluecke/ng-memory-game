import { AppState } from '@AppBase/store';
import { Card, CardPair } from '@MemoryGame/models';
import { CardCmp } from '@MemoryGame/lib';
import { CardRenderer, CardOrd } from '@MemoryGame/lib';
import { CardService } from '@MemoryGame/services';
import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { SelectedCardStoreProxyService } from '@MemoryGame/store';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'mg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cards: Card[];
  public pairs: CardPair[] = [];
  public selected: Card[] = [];
  public displayPairs: string[] = [];

  constructor(
    private selectedCardStoreProxyService: SelectedCardStoreProxyService, // TODO remove
    private cardService: CardService
  ) {
    this.cards = CardOrd.shuffle(this.cardService.getCards());

    this.selectedCardStoreProxyService.getSelectedCards().map(selected => {
      this.selected = selected;
    }).subscribe();

    this.selectedCardStoreProxyService.getCardPairs().map(pairs => {
      this.pairs = pairs;
      this.displayPairs = this.getDisplayPair(pairs);
    }).subscribe();
  }

  public cardInPairs(card: Card): boolean {
    return CardCmp.cardInPairs(card, this.pairs);
  }

  public cardInSelected(card: Card): boolean {
    return CardCmp.cardInCards(card, this.selected);
  }

  private getDisplayPair(pairs: CardPair[]): string[] {
    return pairs.reduce((acc, pair) => {
      return acc.concat(pair.map(x => CardRenderer.toString(x)).join(', '));
    }, []);
  }
}
