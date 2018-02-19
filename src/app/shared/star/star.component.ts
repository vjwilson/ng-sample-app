import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit,
  OnDestroy
} from '@angular/core';
import { RatingService } from '../rating.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit, OnChanges, OnDestroy {
  @Input() rating: number;
  @Input() isEdit: boolean = false;
  @Output() onRatingChange: EventEmitter<boolean> = new EventEmitter();

  starColor: string[] = [];

  subscription: Subscription;

  constructor(private ratingService: RatingService) {}

  ngOnInit(): void {
    this.updateStars(this.rating);
    this.subscription = this.ratingService.ratingChanged$.subscribe(
      (rating) => {
        this.updateStars(rating);
      }
    );
  }

  ngOnChanges(): void {
    this.updateStars(this.rating);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  onChangeRating(isIncrease: boolean) {
    isIncrease
      ? this.onRatingChange.emit(true)
      : this.onRatingChange.emit(false);
  }

  updateStars(rating: number) {
    const starRating: number = Math.floor(rating);

    for (let i = 0; i < 5; i++) {
      if (starRating > i) {
        this.starColor[i] = '#ffd055';
      } else {
        this.starColor[i] = '#d8d8d8';
      }
    }
  }
}
