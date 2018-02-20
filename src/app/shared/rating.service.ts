import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RatingService {
  // Observable source
  private ratingChangedSource = new Subject<number>();

  // Observable stream
  ratingChanged$ = this.ratingChangedSource.asObservable();

  constructor() {}

  // Service message command
  changeRating(rating: number) {
    this.ratingChangedSource.next(rating);
  }
}
