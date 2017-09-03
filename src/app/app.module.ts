import { AppComponent } from './app.component';
import { AppReducer, AppState } from '@AppBase/store';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from './game/components/card/card.module';
import { CardService } from './game/services/card.service';
import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule } from '@angular-redux/store';

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
    ngRedux.configureStore(AppReducer.reduce, AppReducer.defaultState);
  }
}
