import { AppState } from '../../../app-reducer';
import { CardActions } from '../actions/card-actions';
import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SelectedCardStoreProxyService {

  constructor(private redux: NgRedux<AppState>) {}

  public get(): Observable<number[]> {
    return this.redux.select((state: AppState) => state.game.selected);
  }

  public dispatch(id: number): void {
    this.redux.dispatch(CardActions.select(id));
  }
}
