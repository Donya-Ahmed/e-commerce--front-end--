import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  sliders:any[]=[
    "assets/img/home.jpg",
    "assets/img/home2.jpg"
  ]
  // heads:any[]=[
  //   "x",
  //   "z"
  // ]
  // tittles:any[]=[
  //   "xnn",
  //   "zmm"
  // ]
  constructor() { }

  ngOnInit(): void {
  }

}
