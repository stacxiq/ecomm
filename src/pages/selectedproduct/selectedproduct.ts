import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
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
  public db:AngularFireDatabase
    ) {
  }

  ionViewDidLoad() {
    console.log(this.navParams.data);
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
    console.log(item);
    //this.pm.buy(this.i)
    this.storage.get('id').then((userid)=>{
      this.db.list(`users/${userid}`).valueChanges().subscribe((data)=>{
        if(data[0]){
        // this.user.address = data[0].toString();
        // this.user.email =data[1].toString();
        // this.user.name = data[3].toString();
        // this.user.image = data[2].toString();
        // this.user.phone = data[4].toString();
       this.pm.buy(this.i,item.name,item.description,item.price,item.image,data[3],data[0],data[4]);
        }
      });
    
    })
  }
}
