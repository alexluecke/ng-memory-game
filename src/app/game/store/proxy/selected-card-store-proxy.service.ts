import { AppState } from '@AppBase/store';
import { Card, CardPair } from '@MemoryGame/models';
import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { GameActions } from '../actions/game-actions';
import { GameState } from '../reducers/game-reducer';

@Injectable()
export class SelectedCardStoreProxyService {

  constructor(private redux: NgRedux<AppState>) {}

  public getSelectedCards(): Observable<Card[]> {
    return this.redux.select((state: AppState) => state.game.selected);
  }

  public getCardPairs(): Observable<CardPair[]> {
    return this.redux.select((state: AppState) => state.game.pairs);
  }

  public selectCard(card: Card): void {
    this.redux.dispatch(GameActions.select(card));
  }
}
