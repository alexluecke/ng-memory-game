import { combineReducers } from 'redux';
import { GameReducer, GameState } from './game/store/reducers/game-reducer';
import { GameAction } from './game/store/actions/game-actions';

export type AppState = {
  game: GameState;
};

export class AppReducer {
  public static defaultState = {
    game: GameReducer.defaultState
  };

  public static reducer = combineReducers<AppState>({
    game: GameReducer.reduce
  });

  public static reduce(state: AppState, action: GameAction): AppState {
    return AppReducer.reducer(state, action);
  }
}
