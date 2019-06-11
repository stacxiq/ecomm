import { Component } from '@angular/core';
import {  NavController, NavParams,  AlertController, App } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { SelectedproductPage } from '../selectedproduct/selectedproduct';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  list : Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public db : AngularFireDatabase,private app:App, public alert : AlertController,
    ){}

  ionViewDidLoad() {
    console.log(this.navParams.data);
    this.list = this.db.list(`products/${this.navParams.data}`).snapshotChanges();
    console.log(this.list);
    console.log(this.navParams.data);
  }
  buy(item:any){
    this.app.getRootNav().push(SelectedproductPage,item);
  }

}
