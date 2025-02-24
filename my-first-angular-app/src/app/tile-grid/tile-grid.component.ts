import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { TileComponent } from '../tile/tile.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tile-grid',
  imports: [TileComponent, CommonModule],
  templateUrl: './tile-grid.component.html',
  styleUrl: './tile-grid.component.scss'
})
export class TileGridComponent implements OnChanges{
  @Input() tilesData: any | undefined;

  constructor(){
    console.log('tile grid')
  } 

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tilesData']?.currentValue) {
      console.log('Updated tilesData:', this.tilesData);
    }
  }
}
