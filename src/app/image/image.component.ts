import { Component, OnInit } from '@angular/core';
import {IMG} from "../model/IMG";
import {TourService} from "../service/tour.service";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  imgs!: IMG[];
  img:IMG = new IMG('')
  url:string = '';
  constructor(private imageService:TourService) {this.imgs = this.imageService.img }

  ngOnInit(): void {
  }

}
