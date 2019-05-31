import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Tabs } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MyproductsPage } from '../myproducts/myproducts';

/**
 * Generated class for the ShoppingTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shopping-tabs',
  templateUrl: 'shopping-tabs.html'
})
export class ShoppingTabsPage {
  @ViewChild('myTabs') tabRef: Tabs;

  allproductsRoot = HomePage;
  buyRoot = 'BuyPage'
  myproductsRoot = MyproductsPage;
  myProfile = 'ProfilePage';

  constructor(public navCtrl: NavController) {}

ionViewDidLoad() {
}
}
