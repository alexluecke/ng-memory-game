import { Card } from '@MemoryGame/models';
import { CardActions, SelectedCardStoreProxyService as Store } from '@MemoryGame/store';
import { CardCmp } from '@MemoryGame/lib';
import { Component, HostBinding, HostListener, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'mg-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnDestroy {
  @HostBinding('class.selected') public isSelected: boolean;
  @Input() public card: Card;
  public selected$: Observable<boolean>;
  public subscriptions: Subscription[] = [];

  constructor(private store: Store) {
    this.subscriptions = [
      this.store.getSelectedCards().map(selected => {
        this.isSelected = selected.some(card => CardCmp.isSameCard(card, this.card));
      }).subscribe()
    ];
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  @HostListener('click') public handleClick() {
    this.store.selectCard(this.card);
  }
}
