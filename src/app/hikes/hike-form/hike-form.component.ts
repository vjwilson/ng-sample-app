import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hike } from '../hike';
import { HikesService } from '../hikes.service';

import { FormGroup } from '@angular/forms';
import { FormControlsBase } from './../../shared/form/form-controls-types/form-controls-base';
import { FormControlsText } from './../../shared/form/form-controls-types/form-controls-text';
import { FormControlsService } from './../../shared/form/form-controls.service';

@Component({
  selector: 'app-hike-form',
  templateUrl: './hike-form.component.html',
  styleUrls: ['./hike-form.component.scss']
})
export class HikeFormComponent implements OnInit {
  id: number;
  form: FormGroup;
  hike: Hike;
  errorMessage: any;

  constructor(
    private route: ActivatedRoute,
    private formControlsService: FormControlsService,
    private hikesService: HikesService,
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
      this.initializeForm();
    }
  }

  initializeForm() {
    let controls: FormControlsBase<any>[] = [
      new FormControlsText({
        key: 'Name',
        label: 'Name',
        value: this.hike.name,
        required: true
      }),
    ];

    this.form = this.formControlsService.buildForm(controls);
  }

  getHike(param) {
    this.id = +param;
    this.hikesService.getHike(this.id)
    .subscribe(
      hike => {
        this.hike = hike;
        this.initializeForm();
      },
      error => this.errorMessage = <any>error);
  }
}
