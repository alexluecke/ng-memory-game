import { AppState } from '../../../app-reducer';
import { CardActions } from '../../store/actions/card-actions';
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

@Component({
  selector: 'mg-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() public id: number;
  @Output() public onFlip = new EventEmitter<number>();

  constructor(
    private ngRedux: NgRedux<AppState>
  ) { }

  public ngOnInit() { }

  @HostListener('click') public handleClick() {
    this.onFlip.emit(this.id);
    this.ngRedux.dispatch(CardActions.select(this.id));
  }
}
