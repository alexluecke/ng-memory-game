import { AppComponent } from './app.component';
import { AppReducer, AppState } from './app-reducer';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from './game/components/card/card.module';
import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule } from '@angular-redux/store';

@NgModule({
  imports: [
    NgReduxModule,
    BrowserModule,
    CardModule
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
    ngRedux.configureStore(AppReducer.reduce, AppReducer.defaultState);
  }
}
