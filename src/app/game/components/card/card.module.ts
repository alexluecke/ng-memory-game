import { CardComponent } from './card.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SelectedCardStoreProxyService } from '../../store/proxy/selected-card-store-proxy.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SelectedCardStoreProxyService
  ],
  declarations: [
    CardComponent
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
