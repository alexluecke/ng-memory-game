import { AppState } from './app-reducer';
import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app';

  // TODO: move to service
  public cards: number[];

  constructor(private redux: NgRedux<AppState>) {
    // TODO: move to service
    this.cards = Array.apply(null, Array(52)).map((x, i) => i);
    this.redux.select((state: AppState) => state).subscribe(what => console.log(what));
  }

  public handleFlip(id: number): void {
    console.log(id);
  }
}
