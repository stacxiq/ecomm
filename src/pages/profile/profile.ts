import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { UserProfilePage } from '../user-profile/user-profile';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../model/user';
import {Storage} from '@ionic/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
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
     private afauth:AngularFireAuth,
      private _AuthProvider:AuthProvider
      , private storage:Storage,
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
        console.log(data);
        }
      });
      
    })

  }

}
