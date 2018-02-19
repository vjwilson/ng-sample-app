import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hike } from '../hike';
import { HikesService } from '../hikes.service';

@Component({
  selector: 'app-hike-form',
  templateUrl: './hike-form.component.html',
  styleUrls: ['./hike-form.component.scss']
})
export class HikeFormComponent implements OnInit {
  id: any;
  hike: Hike;
  errorMessage: any;

  constructor(
    private route: ActivatedRoute,
    private hikesService: HikesService
  ) {}

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      this.getHike(param);
    } else {
      this.hike = {
        id: null,
        name: null,
        description: null,
        difficultyLevel: null,
        distance: null,
        elevationGain: null,
        routeType: null,
        rating: null,
        imageUrl: null
      };
    }
  }

  getHike(param) {
    this.id = +param;
    this.hikesService.getHike(this.id)
    .subscribe(
      hike => this.hike = hike,
      error => this.errorMessage = <any>error);
  }

  onSubmit() {
    console.log('hike is now', this.hike);
  }
}
