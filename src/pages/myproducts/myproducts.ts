import { Component } from '@angular/core';
import {  NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { Observable, from } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import $ from 'jquery';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the MyproductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-myproducts',
  templateUrl: 'myproducts.html',
})
export class MyproductsPage {
  list : Observable<any>;
  uuid;

  ionViewDidLoad() {

  }
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public db : AngularFireDatabase, public alert : AlertController,
    public toast : ToastController, private storage:Storage) {
      this.storage.get('id').then((res)=>{
       this.list = db.list(`myproducts/${res}`).snapshotChanges();
       db.list(`myproducts/${res}`).valueChanges().subscribe(data => {
       
        $("page-menufood .waiteloading").hide();
  
        if(data[0] == undefined){
          $("page-menufood .notfoundheader").css("display","flex");
        }
  
        if(data[0] != undefined){
          $("page-menufood .notfoundheader").hide();
        }
      });
   
  

    })

  }


  ngOnInit(){
    var winh = $(window).height();
    var navh = $(".tabs-md .tab-button").innerHeight();
  
    $("page-menufood .waiteloading,page-menufood .notfoundheader").height(winh - (navh + navh) );
  
    }

    delete(key){
      

      this.alert.create({
        subTitle:"هل انت متأكد من حذف الاكلة؟",
        cssClass:"setdire",
        buttons:[{text:"حذف",handler: ()=> {
          this.db.list("fods").remove(key).then( OmarReal => {
            this.toast.create({
              message:"تم حذف الاكلة",
              duration:3000,
              cssClass:"setdire"
            }).present();
          } )
        }},"الغاء"]
      }).present();

    }

    edit(key,image,name,des,price){
    }

}
