import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Age Teller';
  date = new Date();
  showDiff = false;
  diff = '';
  onClick() {
    this.showDiff = true;
  };

}
