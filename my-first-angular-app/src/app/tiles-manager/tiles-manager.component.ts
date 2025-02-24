import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TileGridComponent } from "../tile-grid/tile-grid.component";

@Component({
  selector: 'app-tiles-manager',
  imports: [TileGridComponent],
  templateUrl: './tiles-manager.component.html',
  styleUrl: './tiles-manager.component.scss'
})
export class TilesManagerComponent implements OnInit {
  data: any;
  readonly api: string = 'https://www.cheapshark.com/api/1.0/';
  value: number = 15;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://www.cheapshark.com/api/1.0/deals').subscribe(j => this.data = j)
    
  }
}
