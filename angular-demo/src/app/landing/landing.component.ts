import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
}) 
export class LandingComponent implements OnInit {

  constructor() { }

  slides = [
    { img: "" }
  ];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1, 
    "autoplay": true,
    "autoplaySpeed": 2000,
    "arrows": true,
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "nextArrow": "<div class='nav-btn next-slide'></div>",
    "dots": false,
    "infinite": true
  };
  ngOnInit(): void {
  }




}
