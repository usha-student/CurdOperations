import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  modileId=5;
  // name:any
  // mobileName:any;
  // price:any;
  // RAM:any;
  // storage:any;

  constructor() { }

  mobiles=[
    {
      name:"iphone",
      price:20000,
      ram:4,
      storage:64,
      id:1
    },
    {
      name:"1pluse",
      price:10000,
      ram:8,
      storage:32,
      id:2
    },
    {
      name:"vivo",
      price:40000,
      ram:16,
      storage:64,
      id:3
    },
    {
      name:"redme",
      price:15000,
      ram:6,
      storage:64,
      id:4
    }
  ]

  addMobile(MobileName: any,prize:any,Ram:any,Storage:any,){
    this.mobiles.push({
      name: MobileName,
      price: prize,
      ram: Ram,
      storage: Storage,
      id: this.modileId++
    })
  }

  deleteMobile(index:any){
    this.mobiles.splice(index,1)
  }
}
