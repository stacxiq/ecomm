import { Component } from '@angular/core';
import {NavController, AlertController, App } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import firebase from 'firebase';
import { request } from '../../model/request';
import { RequestProvider } from '../../providers/request/request';
import { ChatPage } from '../chat/chat';
import { ChatProvider } from '../../providers/chat/chat';

/**
 * Generated class for the AdminconnectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-adminconnect',
  templateUrl: 'adminconnect.html',
})
export class AdminconnectPage {
  chat = false;
  filteredusers:any;
  newrequest = {} as request;
  constructor(public navCtrl: NavController,
     public auth: AuthProvider,
     public requestservice:RequestProvider,
     public app:App,
      public alertCtrl:AlertController,
      public chatS:ChatProvider) {
  }

  ionViewDidLoad() {
    this.auth.getAdmin().then((data)=>{
      this.filteredusers = data;
    })
    this.auth.ableToChat().then((data:any)=>{
      for ( var i in data){
        console.log(data[i].chat);
        if(data[i].chat){
          this.chat = true
        }
      }
    });

  }
  sendreq(user){
    this.newrequest.sender = firebase.auth().currentUser.uid;
    this.newrequest.recipient = 'ZSeg05j2Mjh2lbL14YhzROc9FSJ2';
      let successalert = this.alertCtrl.create({
        title: 'Request sent',
        subTitle: 'Your request was sent to ' + user.name,
        buttons: ['ok']
      });

      this.requestservice.sendrequest(this.newrequest).then((res: any) => {
        if (res.success) {
          successalert.present();
        }
      }).catch((err) => {
        alert(err);
      })
  }
  chatme(filteredusers){
    this.chatS.initializefriend(filteredusers);
    this.app.getRootNav().push(ChatPage);
  }

}
