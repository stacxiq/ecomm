import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoppingTabsPage } from './shopping-tabs';

@NgModule({
  declarations: [
    ShoppingTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShoppingTabsPage),
  ]
})
export class ShoppingTabsPageModule {}
