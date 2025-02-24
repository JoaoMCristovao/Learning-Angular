import { Component } from '@angular/core';
import { TilesManagerComponent } from '../tiles-manager/tiles-manager.component';


@Component({
  selector: 'app-home',
  imports: [TilesManagerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(){
    console.log('home constructor');
  }
}
