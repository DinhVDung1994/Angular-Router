import {Injectable} from '@angular/core';
import {Tour} from "../model/Tour";
import {Account} from "../model/Account";
import {IMG} from "../model/IMG";

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor() {
  }

  acc: Account[] = [
    new Account(1, 'aaa', '123'),
    new Account(2, 'bbb', '123'),
    new Account(3, 'ccc', '123'),
    new Account(4, 'ddd', '123')
  ]

  img:IMG[] = [
    new IMG('https://i.pinimg.com/originals/e1/6d/eb/e16deb876a67e312c337cb547b600505.jpg'),
    new IMG('https://i.pinimg.com/originals/fc/d1/3d/fcd13d1f1b1e298ba79250d1ce221c86.jpg'),
    new IMG('https://i.pinimg.com/originals/b6/57/d4/b657d41081c863feb8373e15a5b4e78d.jpg'),
    new IMG('https://i.pinimg.com/originals/12/5c/c0/125cc0b2ee667ad15e5313e8b8254607.jpg'),
  ]

  tours: Tour[] = [
    new Tour(1, 'TP.Hà Nội', 5000, 'Tour 2 Ngày 3 Đêm Quẩy Banh Nóc'),
    new Tour(2, 'TP.Phan Thiết', 7000, 'Tour 3 Ngày 4 Đêm Quẩy Banh Nóc'),
    new Tour(3, 'TP.HCM', 9000, 'Tour 4 Ngày 5 Đêm Quẩy Banh Nóc'),
    new Tour(4, 'TP.Đà Nẵng', 11000, 'Tour 5 Ngày 6 Đêm Quẩy Banh Nóc')
  ]
  // tour: Tour = new Tour(0, '', 0, '')
  // description: string = '';
  // price: number = 0;
  // name: string = '';
  // id: number = 0;
  //
  // delete(id: number) {
  //   for (let i = 0; i < this.tours.length; i++) {
  //     if (this.tours[i].id === id) {
  //       this.tours.splice(i, 1);
  //       return;
  //     }
  //   }
  // }
  //
  // create(id:number) {
  //   let check = true;
  //   for (let i = 0; i < this.tours.length; i++) {
  //     if (this.tours[i].id == id) {
  //       check = false
  //     }
  //   }
  //   if (!check) {
  //     alert('ID Tour Đã Tồn Tại')
  //   } else {
  //     this.tours.push(new Tour(this.id, this.name, this.price, this.description))
  //     console.log(this.tour)
  //     return;
  //   }
  // }
  //
  //
  // showEdit(id: number) {
  //   for (let i = 0; i < this.tours.length; i++) {
  //     if (this.tours[i].id === id) {
  //       this.id = this.tours[i].id
  //       this.name = this.tours[i].name
  //       this.price = this.tours[i].price
  //       this.description = this.tours[i].description
  //       return;
  //     }
  //   }
  // }
  //
  // update(id: number) {
  //   for (let i = 0; i < this.tours.length; i++) {
  //     if (this.tours[i].id === id) {
  //       this.tours[i] = new Tour(this.id, this.name, this.price, this.description)
  //       return;
  //     }
  //   }
  // }
  //
  // showDetails(t: Tour) {
  //   this.tour = new Tour(t.id, t.name, t.price, t.description)
  // }
}
