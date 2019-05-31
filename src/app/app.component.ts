import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ShoppingTabsPage } from '../pages/shopping-tabs/shopping-tabs';
import { AuthProvider } from '../providers/auth/auth';
import { Storage } from '@ionic/storage';
import firebase from 'firebase';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ShoppingTabsPage;

  constructor(platform: Platform,
     statusBar: StatusBar,
      splashScreen: SplashScreen,
      public storage:Storage,
      ) {
    
    platform.ready().then(() => {
      this.storage.get('id').then((id)=>{
        if(id == null){
          firebase.auth().onAuthStateChanged(function(user) {
            console.log(user.uid);
            storage.set('id',user.uid);
          });
        } else{
          console.log(id);
        }
      });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

