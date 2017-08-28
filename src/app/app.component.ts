import { AppState } from './app-reducer';
import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { CardService } from './game/services/card.service';

@Component({
  selector: 'mg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cards: number[];

  constructor(private cardService: CardService) {
    this.cards = this.cardService.getCardValues();
  }
}
