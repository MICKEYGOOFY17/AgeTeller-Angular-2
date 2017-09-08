import { Component, Input } from '@angular/core';

@Component({
  selector: 'age',
  templateUrl: './age.component.html'
})

export class AgeComponent {
  title = 'yuva';
  diff = '';
  @Input() date;
  calculate() {
    console.log(this.date);
    let today = new Date().getTime();
    let birthday = new Date(this.date).getTime();
    let diff = Math.abs(today - birthday);
    let millsecondsPerDay = 1000 * 3600 * 24;
    let days = Math.floor(diff / millsecondsPerDay);
    let years = Math.floor(days/ 365);
    days -= years * 365;
    let months = Math.floor(days/ 31);
    days -= months * 31;
    this.diff = `${years} Years, ${months} months, ${days} Days`;
  }
}
