import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'User';
  serverStatus = false;

  constructor() {
    setTimeout(() => {
      this.serverStatus = true;
    }, 6000);

  }

  getStatus() {
    return this.serverStatus ? 'Online' : 'Offline';
  }



  sendAlert() {
    alert('SErver Up');
  }



}
