import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hike } from '../hike';
import { HikesService } from '../hikes.service';

@Component({
  templateUrl: './hike-detail.component.html',
  styleUrls: ['./hike-detail.component.scss']
})
export class HikeDetailComponent implements OnInit {
  hike: Hike;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hikesService: HikesService
  ) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.hike = this.hikesService.getHike(id);
    }
  }

  onBack(): void {
    this.router.navigate(['/hikes']);
  }
}
