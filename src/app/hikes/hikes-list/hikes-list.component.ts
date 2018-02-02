import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hike } from '../hike';
import { HikesService } from '../hikes.service';

@Component({
  selector: 'app-hikes-list',
  templateUrl: './hikes-list.component.html',
  styleUrls: ['./hikes-list.component.scss']
})
export class HikesListComponent implements OnInit {
  hikes: Hike[] = [];

  constructor(
    private router: Router,
    private hikesService: HikesService,
  ){ }

  ngOnInit() {
    this.hikes = this.hikesService.getHikes();
  }

  onRowClick(hike): void {
    this.router.navigate(['/hikes', hike.id]);
  }
}
