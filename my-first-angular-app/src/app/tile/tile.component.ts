import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, HostListener } from '@angular/core';

@Component({
  selector: 'app-tile',
  imports: [CommonModule],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.scss',
})
export class TileComponent implements OnChanges {
  @Input() tileData = {
    title: '',
    normalPrice: '',
    salePrice: '',
    savings: 0,
    steamRatingCount: '',
    steamRatingPercent: 0,
    thumb: '',
    rating: 0
  };

  showBack: Boolean = false;
  hovering: Boolean = true;


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tileData']?.currentValue) {
      //this.rating = this.calculateRating(this.tileData.savings, this.tileData.steamRatingPercent)
    }
  }


  startRotation() : void {
    this.hovering = true;
    setTimeout(() => {
      if(this.hovering) this.showBack = true;
    }, 250); // Halfway point of 500ms transition
  }

  resetRotation() {
    this.hovering = false;
    setTimeout(() => {
      if(!this.hovering) this.showBack = false;
    }, 250); // Reset after halfway
  }
}
