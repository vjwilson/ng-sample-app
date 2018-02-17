import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RatingService {
  // Observable string sources
  private ratingChangedSource = new Subject<number>();

  // Observable string streams
  ratingChanged$ = this.ratingChangedSource.asObservable();

  constructor() {}

  // Service message commands
  changeRating(rating: number) {
    this.ratingChangedSource.next(rating);
  }
}
