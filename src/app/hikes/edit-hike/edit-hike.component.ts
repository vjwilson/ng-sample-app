import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hike } from '../hike';
import { HikesService } from '../hikes.service';

@Component({
  selector: 'app-edit-hike',
  templateUrl: './edit-hike.component.html',
  styleUrls: ['./edit-hike.component.scss']
})
export class EditHikeComponent implements OnInit {
  hike: Hike;
  errorMessage: any;
  hikeId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hikesService: HikesService
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

  onRateIncrease(isIncrease: boolean) {
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