import { Card } from '@MemoryGame/models';
import { SelectedCardStoreProxyService as Store } from '@MemoryGame/store';
import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'mg-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() public card: Card;

  constructor(private store: Store) {}

  @HostListener('click') public handleClick() {
    this.store.selectCard(this.card);
  }
}
