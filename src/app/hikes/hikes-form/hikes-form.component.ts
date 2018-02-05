import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hike } from '../hike';
import { HikesService } from '../hikes.service';

@Component({
  selector: 'app-hikes-form',
  templateUrl: './hikes-form.component.html',
  styleUrls: ['./hikes-form.component.scss']
})
export class HikesFormComponent implements OnInit {
  id: any;
  hike: Hike;

  constructor(
    private route: ActivatedRoute,
    private hikesService: HikesService
  ) {}

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      this.id = +param;
      this.hike = this.hikesService.getHike(this.id);
    }
  }

}
