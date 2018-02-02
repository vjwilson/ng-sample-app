import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

import { AppendMilesPipe } from '../../shared/append-miles.pipe';
import { StarComponent } from '../../shared/star/star.component';
import { HikesService } from '../hikes.service';

import { HikeDetailComponent } from './hike-detail.component';

describe('HikeDetailComponent', () => {
  let component: HikeDetailComponent;
  let fixture: ComponentFixture<HikeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        HikeDetailComponent,
        StarComponent,
        AppendMilesPipe,
      ],
      providers: [
        HikesService,
        {
          provide: ActivatedRoute, useValue: {
            params: {id: 3},
          },
        },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
