import { Component } from '@angular/core';
import {  NavController, NavParams, ToastController } from 'ionic-angular';
import { ProductManagementProvider } from '../../providers/product-management/product-management';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'page-selectedproduct',
  templateUrl: 'selectedproduct.html',
})
export class SelectedproductPage {
  product:any;
  i=0;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
  public pm:ProductManagementProvider,
  public storage:Storage,
  public db:AngularFireDatabase,
  public toast:ToastController
    ) {
  }

  ionViewDidLoad() {
    this.product = this.navParams.data;
  }
  add(){
    this.i++;
  }
  rem(){
    if(this.i == 0){

    }
    else{
      this.i--;
    }
  }
  buy(item){
    this.storage.get('id').then((userid)=>{
      this.db.list(`users/${userid}`).valueChanges().subscribe((data)=>{
        if(data[0]){
       this.pm.buy(this.i,item.name,item.description,item.price,item.image,data[3],data[0],data[4]).then(()=>{
        this.toast.create({
          message:"تم  ",
          duration:3000,
          cssClass:"setdire"
        }).present();
        this.navCtrl.popToRoot();
       });

        }
      });

    })
  }
}
