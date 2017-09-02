import { AppState } from './app-reducer';
import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { CardService } from './game/services/card.service';

// TODO remove
import { SelectedCardStoreProxyService } from './game/store/proxy/selected-card-store-proxy.service';

@Component({
  selector: 'mg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cards: number[];
    public pairs: [number, number][] = [];

  constructor(
    private selectedCardStoreProxyService: SelectedCardStoreProxyService, // TODO remove
    private cardService: CardService
  ) {
    this.cards = this.cardService.getCardValues();

    // TODO remove
    this.selectedCardStoreProxyService.all().map(state => {
      this.pairs = state.pairs;
    }).subscribe();
  }
}
