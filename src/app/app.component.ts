import { Component } from '@angular/core';
import { ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public toasterconfig: ToasterConfig = new ToasterConfig({
    animation: 'fade',
    timeout: 6000,
    preventDuplicates: true,
    mouseoverTimerStop: true
  });

  constructor() { }
}
