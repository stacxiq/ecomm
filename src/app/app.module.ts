import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Camera } from '@ionic-native/camera';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { firebaseConfig } from './app.firebase';
import { AuthProvider } from '../providers/auth/auth';
import { ProductManagementProvider } from '../providers/product-management/product-management';
import { ShoppingTabsPage } from '../pages/shopping-tabs/shopping-tabs';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { IonicStorageModule } from '@ionic/storage';

import { MyproductsPage } from '../pages/myproducts/myproducts'
import { BuyProductsPage } from '../pages/buy-products/buy-products';
import { ProductPage } from '../pages/product/product';
import { SelectedproductPage } from '../pages/selectedproduct/selectedproduct';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ShoppingTabsPage,
    UserProfilePage,
    MyproductsPage,
    BuyProductsPage,
    ProductPage,
    SelectedproductPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ShoppingTabsPage,
    UserProfilePage,
    MyproductsPage,
    BuyProductsPage,
    ProductPage,
    SelectedproductPage
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AngularFireDatabase,
    ProductManagementProvider,
    
  ]
})
export class AppModule {}
