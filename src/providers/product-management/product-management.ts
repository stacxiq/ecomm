import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable()
export class ProductManagementProvider {

  constructor(public db : AngularFireDatabase) {
  }
  addProducts(category:string,userid:string,name:string,price:number,description:string,image:string){
    return  this.db.list(`waitingproducts/${category}`).push({
      userid : userid,
      name:name,
      description:description,
      image:image,
      price:price
    }).then(()=>{
      this.db.list(`myproducts/${userid}`).push({
        name:name,
        description:description,
        image:image,
        price:price
      }).then((product)=>{
        console.log(product);
      });
    });
  }

 async buy(count,name,desc,price,img,username,address,phone){
    return await this.db.list(`paid`).push({
      count:count,
      name:name,
      desc:desc,
      price:price,
      img:img,
      username:username,
      address:address,
      phone:phone
    });
  }

}
