import { Component, OnInit } from '@angular/core';

import { Hike } from '../hike';
import { HikesService } from '../hikes.service';

@Component({
  selector: 'app-hikes-list',
  templateUrl: './hikes-list.component.html',
  styleUrls: ['./hikes-list.component.scss']
})
export class HikesListComponent implements OnInit {
  hikes: Hike[] = [];

  constructor(private hikesService: HikesService) { }

  ngOnInit() {
    this.hikes = this.hikesService.getHikes();
  }

}
