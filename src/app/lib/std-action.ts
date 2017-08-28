import { Action } from 'redux';

export interface StdAction<Payload, Meta> extends Action {
  type: string | symbol;
  payload: Payload;
  error?: Boolean;
  meta?: Meta;
}
