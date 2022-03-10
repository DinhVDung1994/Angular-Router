import { Component, OnInit } from '@angular/core';
import {Account} from "../model/Account";
import {TourService} from "../service/tour.service";
import {Tour} from "../model/Tour";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  showaccount!:Account[];
  account:Account = new Account(0,'','')
  id:number =0;
  name:string ='';
  password:string = '';

  constructor(private accService:TourService) {
    this.showaccount = accService.acc
  }

  ngOnInit(): void {
  }

  deleteAcc(id: number) {
    for (let i = 0; i < this.showaccount.length; i++) {
      if (this.showaccount[i].id === id) {
        this.showaccount.splice(i, 1);
        return;
      }
    }
  }

  createAcc() {
    this.showaccount.push(new Account(this.id, this.name, this.password))
    this.id = 0;
    this.name = '';
    this.password = '';

  }


  showEditAcc(id: number) {
    for (let i = 0; i < this.showaccount.length; i++) {
      if (this.showaccount[i].id ===id){
        this.id = this.showaccount[i].id
        this.name = this.showaccount[i].name
        this.password = this.showaccount[i].password
        return;
      }
    }
  }

  updateAcc(id: number) {
    for (let i = 0; i < this.showaccount.length; i++) {
      if (this.showaccount[i].id === id){
        this.showaccount[i] = new Account(this.id, this.name, this.password)
        return;
      }
    }
  }

  showDetails(t: Account) {
    this.account = new Account(t.id,t.name,t.password)
  }
}
