import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import {Storage} from '@ionic/storage';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
user ={
  'email':'',
  'image':'',
  'name':'',
  'phone':'',
  'address':''
}

list;
  constructor(public navCtrl: NavController,
     public navParams: NavParams ,
      private storage:Storage,
      private db:AngularFireDatabase) {
        this.list = db.list("fods").snapshotChanges();
  }

  ionViewDidLoad() {
    this.storage.get('id').then((userid)=>{
      this.db.list(`users/${userid}`).valueChanges().subscribe((data)=>{
        if(data[0]){
        this.user.address = data[0].toString();
        this.user.email =data[1].toString();
        this.user.name = data[3].toString();
        this.user.image = data[2].toString();
        this.user.phone = data[4].toString();
        }
        console.log(data);
      },(err)=>{
        console.log(err);
      });

    })

  }

}
