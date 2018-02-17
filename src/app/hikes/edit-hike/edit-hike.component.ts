import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hike } from '../hike';
import { HikesService } from '../hikes.service';
import { StarComponent } from '../../shared/star/star.component';
import { RatingService } from '../../shared/rating.service';

@Component({
  selector: 'app-edit-hike',
  templateUrl: './edit-hike.component.html',
  styleUrls: ['./edit-hike.component.scss']
})
export class EditHikeComponent implements OnInit {
  @ViewChild(StarComponent) private starComponent: StarComponent;
  hike: Hike;
  errorMessage: any;
  hikeId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hikesService: HikesService,
    private ratingService: RatingService
  ) {}

  ngOnInit() {
    this.hikeId = this.route.snapshot.paramMap.get('id');
    if (this.hikeId) {
      const id = +this.hikeId;
      this.hikesService
        .getHike(id)
        .subscribe(
          (hike) => (this.hike = hike),
          (error) => (this.errorMessage = <any>error)
        );
    }
  }

  onBack(): void {
    this.router.navigate(['../'], {
      relativeTo: this.route
    });
  }

  onChangeRatingFromChild(isIncrease: boolean) {
    this.updateRating(isIncrease);
  }

  onChangeRatingFromParent(isIncrease: boolean) {
    this.updateRating(isIncrease);
    this.starComponent.updateStars(this.hike.rating);
  }

  onChangeRatingViaService(isIncrease: boolean) {
    this.updateRating(isIncrease);
    this.ratingService.changeRating(this.hike.rating);
  }

  updateRating(isIncrease: boolean) {
    if (isIncrease) {
      if (this.hike.rating < 5) {
        this.hike.rating++;
      }
    } else {
      if (this.hike.rating !== 0) {
        this.hike.rating--;
      }
    }
  }
}
