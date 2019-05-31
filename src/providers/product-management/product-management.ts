import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable()
export class ProductManagementProvider {

  constructor(public db : AngularFireDatabase) {
  }
  async addProducts(category:string,userid:string,name:string,price:number,description:string,image:string){
    return await this.db.list(`waitingproducts/${category}`).push({
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

  buy(count,name,desc,price,img,username,address,phone){
    this.db.list(`paid`).push({
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
