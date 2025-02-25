import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TileGridComponent } from '../tile-grid/tile-grid.component';

@Component({
  selector: 'app-tiles-manager',
  imports: [TileGridComponent],
  templateUrl: './tiles-manager.component.html',
  styleUrl: './tiles-manager.component.scss',
})
export class TilesManagerComponent implements OnInit {
  data: any;
  readonly api: string = 'https://www.cheapshark.com/api/1.0/';
  value: number = 15;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://www.cheapshark.com/api/1.0/deals?storeID=1').subscribe((j) => {
      if (Array.isArray(j)) {
        this.data=j.map((item) => ({
          ...item,
          rating: this.calculateRating(item.savings, item.steamRatingPercent),
          thumb: `https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${item.steamAppID}/header.jpg`,
        }));
      }
    });
  }

  calculateRating(savings: number, steamRatingPercent: number): number {
    var rating = savings;
    rating *= steamRatingPercent * 0.0001;
    rating *= rating * rating;
    return rating;
  }
}
