import {Component, OnInit} from '@angular/core';
import {TourService} from "../../service/tour.service";
import {Tour} from "../../model/Tour";

@Component({
  selector: 'app-show-tour',
  templateUrl: './show-tour.component.html',
  styleUrls: ['./show-tour.component.css']
})
export class ShowTourComponent implements OnInit {
  showTours: Tour[] =[];
  tour: Tour = new Tour(0, '', 0, '')
  description: string = '';
  price: number = 0;
  name: string = '';
  id: number = 0;

  constructor(private tourService: TourService) {
    this.showTours = tourService.tours
  }

  ngOnInit(): void {
  }

  deleteTour(id: number) {
   // this.tourService.deleteTour(id)
    for (let i = 0; i < this.showTours.length; i++) {
      if (this.showTours[i].id === id) {
        this.showTours.splice(i, 1);
        return;
      }
    }
  }

  createTour(id:number) {
    let check = true;
    for (let i = 0; i < this.showTours.length; i++) {
      if (this.showTours[i].id == id) {
        check = false
      }
    }
    if (!check) {
      alert('ID Tour Đã Tồn Tại')
    } else {
      this.showTours.push(new Tour(this.id, this.name, this.price, this.description))
      this.id = 0;
      this.name = '';
      this.price = 0;
      this.description = '';
      return;
    }
  }


  showEditTour(id: number) {
    // this.tourService.showEditTour(id)
    for (let i = 0; i < this.showTours.length; i++) {
      if (this.showTours[i].id === id) {
        this.id = this.showTours[i].id
        this.name = this.showTours[i].name
        this.price = this.showTours[i].price
        this.description = this.showTours[i].description
        return;
      }
    }
  }

  updateTour(id: number) {
    // this.tourService.updateTour(id)
    for (let i = 0; i < this.showTours.length; i++) {
      if (this.showTours[i].id === id) {
        this.showTours[i] = new Tour(this.id, this.name, this.price, this.description)
        return;
      }
    }
  }

  showDetails(t: Tour) {
    this.tour = new Tour(t.id, t.name, t.price, t.description)
  }
}
