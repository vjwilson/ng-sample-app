import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating: number;
  @Input() isEdit: boolean = false;
  @Output() onRatingChange: EventEmitter<boolean> = new EventEmitter();

  starColor: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.updateStars();
  }

  ngOnChanges(): void {
    this.updateStars();
  }

  onChangeRating(isIncrease: boolean) {
    isIncrease
      ? this.onRatingChange.emit(true)
      : this.onRatingChange.emit(false);
  }

  updateStars() {
    const starRating: number = Math.ceil(this.rating);

    for (let i = 0; i < 5; i++) {
      if (starRating > i + 1) {
        this.starColor[i] = '#ffd055';
      } else {
        this.starColor[i] = '#d8d8d8';
      }
    }
  }
}
