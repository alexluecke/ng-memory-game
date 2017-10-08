import { AppReducer, AppState } from '@AppBase/store';
import { BrowserModule } from '@angular/platform-browser';
import { CardService } from '@MemoryGame/services';
import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import thunkMiddleware from 'redux-thunk';

import { AppComponent } from './app.component';
import { CardModule } from './game/components/card/card.module';

@NgModule({
  imports: [
    NgReduxModule,
    BrowserModule,
    CardModule
  ],
  providers: [
    CardService
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor(ngRedux: NgRedux<AppState>) {
    const reduxMiddleware = [
      thunkMiddleware
    ];

    ngRedux.configureStore(
      AppReducer.reduce,
      AppReducer.defaultState,
      reduxMiddleware
    );
  }
}
