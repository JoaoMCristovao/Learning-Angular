import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tile',
  imports: [],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.scss',
})
export class TileComponent implements OnChanges {
  @Input() tileData = {
    title: '',
    normalPrice: '',
    salePrice: '',
    savings: '',
    steamRatingCount: '',
    steamRatingPercent: '',
    thumb: '',
  };

  rating: number = 0;
  ratingColor: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tileData']?.currentValue) {
    }
  }

  calculateRating(
    savings: number,
    steamRatingCount: number,
    steamRatingPercent: number
  ): number {
    var rating = savings;
    rating *= steamRatingPercent * 0.01;
    return rating;
  }

  calculateColor(rating: number): string {
    const color1 = '1f4037';
    const color2 = '99f2c8';
    const ratio = 0.5; // You might want to adjust this based on rating

    const hex = (x: number): string => {
      const hexValue = x.toString(16);
      return hexValue.length === 1 ? '0' + hexValue : hexValue;
    };

    const r = Math.ceil(
      parseInt(color1.substring(0, 2), 16) * ratio +
        parseInt(color2.substring(0, 2), 16) * (1 - ratio)
    );
    const g = Math.ceil(
      parseInt(color1.substring(2, 4), 16) * ratio +
        parseInt(color2.substring(2, 4), 16) * (1 - ratio)
    );
    const b = Math.ceil(
      parseInt(color1.substring(4, 6), 16) * ratio +
        parseInt(color2.substring(4, 6), 16) * (1 - ratio)
    );

    const middle = hex(r) + hex(g) + hex(b);
    return middle;
  }
}
