import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { User } from '../../model/user'
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AuthProvider {
  user:User;
fireUser = firebase.database().ref(`users`);

  constructor(public afAuth: AngularFireAuth,
       public db : AngularFireDatabase) {
    console.log('Hello AuthProvider Provider');
  }
  login(email: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
  async register(email:string, pass:string){
    return await this.afAuth.auth.createUserWithEmailAndPassword(email,pass).then((userData) =>{
      console.log(userData);
    }
    )
  }
  async addUser( name , address,phone, imageurl){
    if(imageurl.length < 1){
      imageurl = 'https://www.shareicon.net/data/512x512/2016/05/29/772558_user_512x512.png';
    }
     return await this.db.object(`users/${firebase.auth().currentUser.uid}`).set({
        name:name,
        address:address,
        phone:phone,
        email:firebase.auth().currentUser.email,
        image:imageurl,
      }).then( done => {
        console.log(done);
      },(err)=>{
        console.log(err);
      });
  }
  getUser():firebase.database.Reference{
    return this.fireUser;
  }
  checkUser(id):boolean{
    let m=false;
    this.fireUser.child(id).on('value',(snap)=>{
      if(snap.val() == null){
        m=false;
      }else{
        m=true;
      }
    });
    return m;
  }
  isLoggedIn():boolean{
    if(firebase.auth().currentUser != null){
      return true;
    } else{
     return false 
    }
  }
}
