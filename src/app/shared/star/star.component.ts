import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  @Input() rating: number;

  starColor: string[] = [];

  constructor() { }

  ngOnInit() {
    const starRating: number = Math.ceil(this.rating);

    for (let i = 0; i < 5; i++ ) {
      if (starRating > i + 1) {
        this.starColor[i] = '#ffd055';
      } else {
        this.starColor[i] = '#d8d8d8';
      }
    }
  }
}
