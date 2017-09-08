import { Component, Input } from '@angular/core';

import { Age } from './age.model';

@Component({
  selector: 'age',
  templateUrl: './age.component.html',
  styles: [
    `.partyPopper {
      height: 200px;
      width: 200px;
    }`
  ]
})

export class AgeComponent {
  title = 'yuva';
  img = './../../assets/party-popper.jpg';
  age;
  @Input() date;
  calculate() {
    let today = new Date().getTime();
    let birthday = new Date(this.date).getTime();
    let diff = Math.abs(today - birthday);
    let millsecondsPerDay = 1000 * 3600 * 24;
    let days = Math.floor(diff / millsecondsPerDay);
    let years = Math.floor(days/ 365);
    days -= years * 365;
    let months = Math.floor(days/ 31);
    days -= months * 31;
    this.age = new Age(days, months, years);
  }
}
