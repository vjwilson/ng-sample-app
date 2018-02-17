import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  @Input() isEdit: boolean = false;
  @Output() onRatingIncrease: EventEmitter<boolean> = new EventEmitter();

  starColor: string[] = [];

  constructor() {}

  ngOnChanges() {
    this.updateStars();
  }

  onChangeRating(isIncrease: boolean) {
    isIncrease
      ? this.onRatingIncrease.emit(true)
      : this.onRatingIncrease.emit(false);
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
