import { CardActions } from '../../store/actions/card-actions';
import { Component, HostBinding, HostListener, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SelectedCardStoreProxyService } from '../../store/proxy/selected-card-store-proxy.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'mg-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnDestroy {
  @HostBinding('class.selected') public isSelected: boolean;
  @Input() public id: number;
  public selected$: Observable<boolean>;
  public subscriptions: Subscription[] = [];

  constructor(
    private selectedCardStoreProxyService: SelectedCardStoreProxyService
  ) {
    this.subscriptions = [
      this.selectedCardStoreProxyService.get().map(selected => {
        this.isSelected = selected.some(id => id === this.id);
      }).subscribe()
    ];
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  @HostListener('click') public handleClick() {
    this.selectedCardStoreProxyService.dispatch(this.id);
  }
}
