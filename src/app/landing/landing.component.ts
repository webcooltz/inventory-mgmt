import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  minutesWorked!: number;

  constructor() {

   }

  ngOnInit() {
    // this.minutesWorked = this.workService.getMinutes();
  }

}
